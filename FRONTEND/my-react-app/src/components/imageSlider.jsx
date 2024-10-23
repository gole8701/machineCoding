import React, { useEffect, useState } from 'react'
import "../App.css";
import { imagesConfig } from '../constants';

function ImageSlider() {
const [currentImage, setCurrentImage] = useState(0)

const rightScroll =()=>{
    setCurrentImage((curr)=> curr-1 < 0 ? imagesConfig.length-1 : curr-1) 
}
const leftScroll =()=>{
    setCurrentImage((curr)=>(curr+1) % imagesConfig.length) 
}


useEffect(()=>{
  let imgCarow = setInterval(()=>{
    leftScroll()
    }, 1500)
  return ()=>clearInterval(imgCarow)
},[currentImage])
  return (
    <div className='imageSlider'>
        <span className='shift' onClick={()=>rightScroll()}>{'<'}</span>
        <img style={{width: '500px', height: '350px'}} src={imagesConfig[currentImage]?.url} alt="images"/>
        <span onClick={()=>leftScroll()} className='shift'>{'>'}</span>
        <>{currentImage}</>
    </div>
  )
}

export default ImageSlider