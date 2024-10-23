import React from 'react'
import "../App.css";

function Card({product}) {

  return (
    <div className='card'>
        <div className='CardImageContainer'>
        <img src={product.thumbnail}/>
        </div>
        <p className='imgTitle'>{product.title}</p>
        <p className='imgTitle'>{product.price}</p>
        <p className='imgTitleDesc'>{product.description}</p>
    </div>
  )
}

export default Card;