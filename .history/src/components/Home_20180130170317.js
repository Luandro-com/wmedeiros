import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import './Home.css';

const projects = [
  {
    img: 'https://picsum.photos/200?random',
    name: 'Hello'
  },
  {
    img: 'https://picsum.photos/200?random',
    name: 'Ola'
  },
  {
    img: 'https://picsum.photos/200?random',
    name: 'Tchau'
  },
  {
    img: 'https://picsum.photos/200?random',
    name: 'Ui'
  },
  {
    img: 'https://picsum.photos/200?random',
    name: 'Obrigado'
  },
  {
    img: 'https://picsum.photos/200?random',
    name: 'Alow'
  },
  {
    img: 'https://picsum.photos/200?random',
    name: 'Aha'
  },
]

export default () => (
  <div className="Home">
    { projects.map((item, i) => {
      <ProgressiveImage src='large-image.jpg' placeholder='tiny-image.jpg'>
        {(src, loading) => (
          <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt='an image'/>
        )}
      </ProgressiveImage>
    })}
  </div>
);