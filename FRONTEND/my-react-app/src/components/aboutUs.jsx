import React from 'react'
import {CONFIG} from '../utils.jsx/languageConfig'

function AboutUs({language}) {
  const data = CONFIG[language];
  console.log(language,data, 'language');
  return (
    <div>
      <h1>Title: {data.title}</h1>
      <div>Message: {data.message}</div>
    </div>
  )
}

export default AboutUs