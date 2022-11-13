import React, {useState} from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';


const GallerySrc = () => {
  let data = [
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/mkXsYAI.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/NmJEXNJ.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/oZEouat.png'
    },
    {
      id: 6,
      imgSrc: 'https://i.imgur.com/eKGz1Do.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/ol4KyGl.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/yVnQLYx.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/GrI2fAn.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/AdGSqnr.png'
    },
    {
      id: 5,
      imgSrc: 'https://i.imgur.com/u0R4zTs.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/mkXsYAI.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/NmJEXNJ.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/oZEouat.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/ol4KyGl.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/yVnQLYx.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/GrI2fAn.png'
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
      imgSrc: 'https://i.imgur.com/mkXsYAI.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/NmJEXNJ.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/oZEouat.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/ol4KyGl.png'
    },
    {
      id: 2,
      imgSrc: 'https://i.imgur.com/yVnQLYx.png'
    },
    {
      id: 1,
      imgSrc: 'https://i.imgur.com/GrI2fAn.png'
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
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  return (
    <div>
      <div className={model? "model open": "model"} >
        <img src={tempImgSrc} />
        <CloseIcon onClick={() => setModel(false)}/>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{width: '100%'}}/>
            </div>
          )
        }, [])}
      </div>
    </div>
  )
}

export default GallerySrc;