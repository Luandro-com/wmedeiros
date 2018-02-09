import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Spinner from 'react-spinkit';
import InfoContainer from '../../containers/Info';
import './style.css';

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
    const { loading, contactPhone, contactEmail } = this.props
    return (
      <div className="Contact">
        {loading && <Loader />}
        {(!loading && <div className="Contact-container">
          {contactEmail && <h2>{contactEmail}</h2>}
          {contactPhone && <h2>{contactPhone}</h2>}
        </div>)}
      </div>
    );
  }
}

export default () =>  <Subscribe to={[InfoContainer]}>
  { info => <View {...info.state} load={info.load} /> }
</Subscribe>