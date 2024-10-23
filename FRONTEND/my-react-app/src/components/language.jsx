import React from 'react'

function Language({onChange, language}) {
  return (
    <div style={{width: '200px'}}>
        <select value={language} onChange={onChange}>
            <option value={'En'}>English</option>
            <option value={'Hi'}>Hindi</option>
            <option value={'Fr'}>French</option>
        </select>
    </div>
  )
}

export default Language;