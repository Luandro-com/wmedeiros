import React, { Component } from 'react';
import firebase from 'firebase';
import { Subscribe } from 'unstated'
import slugify from 'slugify';
import {
  Editor,
  createEditorState,
} from 'medium-draft';
import mediumDraftExporter from 'medium-draft/lib/exporter';
import Dropzone from 'react-dropzone';
import { Line } from 'rc-progress';
import 'medium-draft/lib/index.css';
import './style.css';
import ProjectsContainer from '../../containers/Projects'

const postId = (Math.floor(100000 + Math.random() * 900000)).toString();

export default class extends Component {
  constructor(props) {
    super(props)
    this.handleText = (editorState) => this.setState({ editorState });
    this.state = {
      title: 'Título',
      headerImage: null,
      editorState: createEditorState(),
      images: [],
      completedImages: []
    }
  }

  onComponentDidMount() {
    const { match: { params } } = this.props
    if (params > 0) {
      // const ref = firebase.database().ref(`portfolio/${params}`);
      // ref.once("value")
      //   .then((snapshot) => {
      //     console.log('snap', snapshot)
      //     const key = snapshot.key;
      //     const childKey = snapshot.child("name/last").key;
      //     console.log(key, childKey)
      //   })
      //   .catch(err => console.log('Error on db', err))
    }
  }

  changeHeaderImage = (key) => {
    this.setState({ headerImage: key })
  }

  onDrop(images) {
    let imageArray = this.state.images
    imageArray.push(images)
    this.setState({ images: imageArray })
    images.map((image, key) => {
      const upload = firebase
        .storage()
        .ref(`portfolio-imagens/${image.name}`)
        .put(new File(images, {type : image.type}));
      return upload.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          [`upload${key}`]: progress
        });
      }, (err) => console.log('Error on image upload', err),
      () => {
        let completedArray = this.state.completedImages
        const downloadURL = upload.snapshot.downloadURL
        completedArray.push(downloadURL)
        if (!this.state.headerImage) {
          this.setState({ completedImages: completedArray, headerImage: 0 })
        } else {
          this.setState({ completedImages: completedArray })
        }
      })
    })
  }

  render() {
    const { title, headerImage, editorState, images, completedImages } = this.state
    const { history: { push } } = this.props
    const postData = {
      title,
      headerImage: completedImages[headerImage],
      images: completedImages,
      text:  mediumDraftExporter(editorState.getCurrentContent()),
      slug: slugify(title.toLowerCase() + ' ' + postId),
      created: Date.now()
    }
    return (
      <Subscribe to={[ProjectsContainer]}>
        {projects =>
          <div className="AddNew">
            <form onSubmit={() => projects.add(postData, push('/'))}>
              <section>
                <h3>Título</h3>
                <input type="text" onChange={(e) => this.setState({ title: e.target.value })} value={title} />
              </section>
              <hr />
              <section className="AddNew-images">
                <h3>Imagens</h3>
                <Dropzone className="AddNew-dropzone" onDrop={this.onDrop.bind(this)} multiple={false}>
                  <p>Arraste um imagem ou clique para adicionar.</p>
                </Dropzone>
                <br />
                  {
                    images.slice(0).reverse().map((f, key) => 
                      <div key={key}>
                        <span>{key + 1}</span>
                        <Line percent={this.state[`upload${key}`]} strokeWidth="2.5" strokeColor="#30A9DE" style={{ width: '80%' }} />
                      </div>
                  )
                  }
                <div className="AddNew-completed">
                  {(completedImages.length > 0) && completedImages.map((img, key) => 
                    <div key={key} onClick={() => this.changeHeaderImage(key)}>
                      <img
                        src={img}
                        alt={img}
                        height="100"
                        width="100"
                        style={(headerImage === key) ? { border: '5px solid green' } : {} } />
                    </div>
                  )}
                </div>
              </section>
              <hr />
              <section>
                <h3>Texto</h3>
                <br />
                <div className="AddNew-editor">
                  <Editor
                    ref="editor"
                    editorState={editorState}
                    onChange={this.handleText} />
                  </div>
              </section>
              <br />
              <div>
                <button type="submit" value="Submit">
                  Salvar
                </button>
                <button type="submit" value="Submit" style={{ background: '#E53A40' }}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        }
      </Subscribe>
    );
  } 
}