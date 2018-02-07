import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import './Home.css';

const projects = [
  {
    img: 'https://picsum.photos/250?random',
    name: 'Hello'
  },
  {
    img: 'https://picsum.photos/250?random',
    name: 'Ola'
  },
  {
    img: 'https://picsum.photos/250?random',
    name: 'Tchau'
  },
  {
    img: 'https://picsum.photos/250?random',
    name: 'Ui'
  },
  {
    img: 'https://picsum.photos/250?random',
    name: 'Obrigado'
  },
  {
    img: 'https://picsum.photos/250?random',
    name: 'Alow'
  },
  {
    img: 'https://picsum.photos/250?random',
    name: 'Aha'
  },
]

export default () => (
  <div className="Home">
    { projects.map((item, key) => {
      return (
        <ProgressiveImage key={key} src={ item.img } placeholder='http://via.placeholder.com/250'>
          {(src, loading) => (
            <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt='an thing'/>
          )}
        </ProgressiveImage>
      )
    })}
  </div>
);