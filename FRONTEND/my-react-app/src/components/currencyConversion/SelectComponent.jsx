import React from 'react'
import styles from "./currency.module.css";

function SelectComponent({currencies, label, onChangeCurrency, selectedCurrency, savedCountries, setSavedCountries}) {

    const handleSavedOptions =(selectedCurrency)=>{
        let updatedFav = [...savedCountries]
        if(savedCountries.includes(updatedFav)){
        updatedFav = savedCountries.filter((f)=> f != selectedCurrency)
        }else{
            updatedFav.push(selectedCurrency)
        }

        setSavedCountries(updatedFav)
    }
const isFaviorate = (curr)=>savedCountries.includes(curr);
  return (
    <div className={styles.selectParent}>
        <label>{label}</label><br/>
        <select className={styles.selectInner} value={selectedCurrency} 
        onChange={(e)=>{onChangeCurrency(e.target.value)}}>
        {savedCountries?.map((currency, index)=>{
           return <option className={styles.optionField} key={index} value={currency}>{currency}</option>
        })}
        {currencies.filter((c)=>!savedCountries.includes(c))?.map((currency, index)=>{
           return <option key={index} value={currency}>{currency}</option>
        })}
        </select>
      { isFaviorate(selectedCurrency) ? <button className={styles.starButton} onClick={()=>handleSavedOptions(selectedCurrency)}>
            <span>&#9733;</span> 
             </button>
        : <button className={styles.starButton} onClick={()=>handleSavedOptions(selectedCurrency)}>
             <span>&#9734;</span> 
             </button>}
    </div>
  )
}

export default SelectComponent;


// 