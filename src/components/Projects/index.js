import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ProgressiveImage from 'react-progressive-image';
import Spinner from 'react-spinkit';
import ProjectsContainer from '../../containers/Projects';
import './style.css';
import { Link } from 'react-router-dom';

const Loader = () => <div className="Projects-loading">
  <Spinner name="folding-cube" color="#000" className="Projects-loading-svg" />
  <h2>Bem vindo ao portfólio prossifional de arquitetura de Wesley Medeiros</h2>
  <hr />
  <h3>carregando...</h3>
</div>

class View extends Component {
  componentDidMount() {
    const { loading, data, load } = this.props
    if (loading && data.length < 1) {
      console.log('Start loading projects data.')
      load()
    }
  }

  render () {
    const { loading, data} = this.props
    return (
      <div className="Projects">
        {loading && <Loader />}
        {(!loading && data.length > 0) &&  data.map((item, key) => {
          const { title, headerImage, slug } = item
          return (
            <Link key={key} to={`p/${slug}`} className="Projects-item">
              <div className="Projects-image-container">
                <ProgressiveImage src={ headerImage }>
                  {(src, imgLoading) => (
                    imgLoading 
                      ? <Spinner name="circle" color="#fff"/>
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