import React, { useState } from 'react'
import styles from "./star.module.css";

function StarComponents() {
    const [onHover, setOnHover] =useState()
    const [star, setStar] =useState()

const handleClick =(index)=>{
    setStar(index+1)
    console.log(index+1,"stars");
}

  return (
    <div>{new Array(5).fill(0).map((Star, index)=>{return(<span className={ index < star || index < onHover ? `${styles.active}` : ''} onMouseEnter={()=>setOnHover(index+1)} onMouseLeave={()=>setOnHover(0)} onClick={()=>handleClick(index)} key={index}>&#9733;</span>)})}</div>
  )
}

export default StarComponents