import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ProgressiveImage from 'react-progressive-image';
import Spinner from 'react-spinkit';
import InfoContainer from '../../containers/Info';
import './style.css';
import { Link } from 'react-router-dom';

const Loader = () => <div className="Projects-loading">
  <Spinner name="folding-cube" color="#000" className="Projects-loading-svg" />
</div>

class View extends Component {
  componentDidMount() {
    const { loading, load } = this.props
    if (loading) {
      console.log('Start loading information data.')
      load()
    }
  }

  render () {
    const { loading, aboutImage, aboutText } = this.props
    return (
      <div className="About">
        {loading && <Loader />}
        {(!loading && <div className="About-container">
          <div className="About-image-container">
            <ProgressiveImage src={ aboutImage }>
              {(src, imgLoading) => (
                imgLoading 
                  ? <Spinner name="three-bounce" color="#D0D0D0"/>
                  : <img src={aboutImage} alt={'Wesley Medeiros'}/>
              )}
            </ProgressiveImage>
          </div>  
          <div className="About-text-container" dangerouslySetInnerHTML={{ __html: aboutText }} />
        </div>)}
        {(!loading && !aboutText) && <h1>Você ainda não adicionou nada ao sua página. Va em <Link to="/login">login</Link> para acessar sua conta e começar. </h1>}
      </div>
    );
  }
}

export default () =>  <Subscribe to={[InfoContainer]}>
  { info => <View {...info.state} load={info.load} /> }
</Subscribe>