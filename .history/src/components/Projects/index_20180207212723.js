import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import './style.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    img: 'https://picsum.photos/250/200?random',
    title: 'Hello'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    title: 'Ola'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    title: 'Tchau'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    title: 'Ui'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    title: 'Obrigado'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    title: 'Alow'
  },
  {
    img: 'https://picsum.photos/250/200?random',
    title: 'Aha'
  },
]

export default () => (
  <div className="Projects">
    { projects.map((item, key) => {
      return (
        <Link key={key} to={`p/${item.title}`} className="Projects-item">
          <div className="Projects-image-container">
            <ProgressiveImage src={ item.img } placeholder='http://via.placeholder.com/500'>
              {(src, loading) => (
                loading 
                  ? <p>Loading</p>
                  : <img src={src} alt='an thing'/>
              )}
            </ProgressiveImage>
          </div>
          <h3>{ item.title }</h3>
        </Link>
      )
    })}
  </div>
);