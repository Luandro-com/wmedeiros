import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import './style.css';

const projects = [
  {
    img: 'https://picsum.photos/250/200?random',
    name: 'Hello'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    name: 'Ola'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    name: 'Tchau'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    name: 'Ui'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    name: 'Obrigado'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    name: 'Alow'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    name: 'Aha'
  },
]

export default () => (
  <div className="Projects">
    { projects.map((item, key) => {
      return (
        <div key={key} className="Projects-list">
          <div className="Projects-image-container">
            <ProgressiveImage src={ item.img } placeholder='http://via.placeholder.com/500'>
              {(src, loading) => (
                <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt='an thing'/>
              )}
            </ProgressiveImage>
          </div>
          <h3>{ item.name }</h3>
        </div>
      )
    })}
  </div>
);