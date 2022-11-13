import React from 'react';
import './gallery.css';

const GallerySrc = () => {
  let data = [
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },

  ]
  return (
    <div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.imgSrc} style={{width: '100%'}}/>
            </div>
          )
        }, [])}
      </div>
    </div>
  )
}

export default GallerySrc;