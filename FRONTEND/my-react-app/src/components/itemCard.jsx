import React from 'react'
import "../App.css";

function ItemCard({item}) {

  return (
    <div className='itemCard'>
        <div className='imageContainer'>
        <img src={item.thumbnailUrl}/>
        </div>
        <p className='imgTitle'>{item.title}</p>
    </div>
  )
}

export default ItemCard