import React, { useState } from 'react'
import AccordionItem from './accordionItem';
import "../App.css";

const data =[
  {title: "This is Accordion 1",
    body: "This is Accordion {1} to show the data for accordion {1}",
  },
  {title: "This is Accordion 2",
    body: "This is Accordion {2} to show the data for accordion {2}",
  },
  {title: "This is Accordion 3",
    body: "This is Accordion {3} to show the data for accordion {3}",
  },
  {title: "This is Accordion 4",
    body: "This is Accordion {4} to show the data for accordion {4}",
  },
]



function Accordion() {
  const [isOpen, setIsOpen]= useState(0)

  return (
    <div className='accordionMain'>
   {data.map((item, index)=>{
    return <AccordionItem isOpen={index === isOpen} key={index} setIsOpen={()=>{ index === isOpen ? setIsOpen(null) : setIsOpen(index)}} item={item}/>
   })}
    </div>
  )
}

export default Accordion