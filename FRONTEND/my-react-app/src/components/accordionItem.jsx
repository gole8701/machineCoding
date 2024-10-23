import React from 'react'
import arrowDown from '../assets/arrowDown.svg'
import arrowUp from '../assets/arrowUp.svg'
import "../App.css";

function AccordionItem({item, setIsOpen, isOpen}) {
  console.log(item,'item')
  return (
    <div className='accordionItem'>
    <div className='accordionHeader' onClick={setIsOpen}> 
      <span>{item.title}</span><img src={isOpen ? arrowDown : arrowUp} alt ='down'/>
    </div>
   {isOpen && <p>{item.body}</p>}
  </div>
  )
}

export default AccordionItem