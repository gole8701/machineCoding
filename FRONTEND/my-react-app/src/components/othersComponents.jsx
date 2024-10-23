import React from 'react'

function OtherComponent({onChange, otherComponent}) {
  return (
    <div style={{width: '200px'}}>
        <select value={otherComponent} onChange={onChange}>
            <option value={'currencyConversion'}>Currency Conversion</option>
            <option value={'star'}>Star Patterns</option>
            <option value={'virtualization'}>virtualization</option>
        </select>
    </div>
  )
}

export default OtherComponent;