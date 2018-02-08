import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ProgressiveImage from 'react-progressive-image';
import ProjectsContainer from '../../containers/Projects';
import './style.css';
import { Link } from 'react-router-dom';

class View extends Component {
  componentDidMount() {
    const { loading, data, load } = this.props
    if (loading && data.length < 1) {
      console.log('load data')
      load()
    }
  }

  render () {
    const { loading, data} = this.props
    return (
      <div className="Projects">
        {loading && <h1>Carregando</h1>}
        {(!loading && data.length > 0) &&  data.map((item, key) => {
          const { title, headerImage, slug } = item
          return (
            <Link key={key} to={`p/${slug}`} className="Projects-item">
              <div className="Projects-image-container">
                <ProgressiveImage src={ headerImage } placeholder='http://via.placeholder.com/500'>
                  {(src, loading) => (
                    loading 
                      ? <p style={{ color: '#fff' }}>Loading</p>
                      : <img src={src} alt={title}/>
                  )}
                </ProgressiveImage>
              </div>
              <h3>{ title }</h3>
            </Link>
          )
        })}
        {(!loading && data.length === 0 && <h1>Você ainda não adicionou nada ao seu portfolio. Va em <Link to="/login">login</Link> para acessar sua conta e começar a criar projetos. </h1>)}
      </div>
    );
  }
}

export default () =>  <Subscribe to={[ProjectsContainer]}>
  { projects => <View loading={projects.state.loading} data={projects.state.data} load={projects.load} /> }
</Subscribe>