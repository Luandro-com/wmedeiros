import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Parallax } from 'react-parallax';
import Lightbox from 'react-image-lightbox';
import AuthContainer from '../../containers/Auth';
import ProjectsContainer from '../../containers/Projects';
import './style.css';

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

const View = ({ slug, title, text, headerImage, openLightbox }) => <div className="PortfolioItem">
  <section className="PortfolioItem-header-image">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={headerImage}
        bgImageAlt="the dog"
        strength={500}
        className="parallax"
      >
        <div className="PortfolioItem-header-image-inside" />
      </Parallax>
  </section>
  <button onClick={openLightbox} className="PortfolioItem-header-button">Ver mais</button>
  <div className="PortfolioItem-content">
    <section className="PortfolioItem-header-title">
      <h1>{title}</h1>
      <hr />
    </section>
    <main>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </main>
  </div>
</div>

class LoadData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lightboxOpen: false,
      photoIndex: 0
    }
  }
  componentDidMount() {
    const { data, loading, load } = this.props
    if (loading && data.length < 1) {
      console.log('Load')
      load()
    }
  }
  render() {
    const { lightboxOpen, photoIndex } = this.state;
    const { data, slug, uid, remove, push } = this.props
    if (data.length > 0) {
      return data.filter((item) => item.slug === slug)
        .map(project => <div key={slug}>
          <div className="PortfolioItem-user-control">
            {uid && <button>Editar</button>}
            {uid && <button onClick={() => remove(project.id, push('/'))} style={{ background: '#E53A40'}}>Deletar</button>}
          </div>
          <View {...project} openLightbox={() => this.setState({ isOpen: true })} />
          {lightboxOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>)
    }
    return (
      <h1>Carregando</h1>
    );
  } 
}

export default ({ match: { params }, history }) => <Subscribe to={[AuthContainer, ProjectsContainer]}>
  {(auth, projects) => {
    const { state: { loading, data }, load, remove } = projects
    const { state: { uid } } = auth
    if (params.slug) {
      return <LoadData data={data} loading={loading} load={load} push={history.push} slug={params.slug} uid={uid} remove={remove} />
    } else {
      history.push('/')
    }
  }}
</Subscribe>
