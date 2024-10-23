import React, { useEffect, useState } from "react";
import styles from "./currency.module.css";
import SelectComponent from "./SelectComponent";

function CurrencyConversion() {
  const [currencies, setCurrencies] = useState([]);
  const [resultStatus, setResultStatus] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [inputValue, setInputValue] = useState(1);
  const [savedCountries, setSavedCountries] = useState(["INR"]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchCurrencyDetails();
  }, []);


  const handleFetchCurrencies =async()=>{
    setLoading(true);
    try {
        const data = await fetch(`https://api.frankfurter.app/latest?amount=1&from=${fromCurrency}&to=${toCurrency}`);
        const response = await data.json();
        const result = (response?.rates[toCurrency]*inputValue).toFixed(2);
        setResultStatus(result + " " + toCurrency)
        console.log(response, 'ooresponse');
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      finally{
        setLoading(false);
      }
  }

  const fetchCurrencyDetails = async () => {
    try {
      const data = await fetch(`https://api.frankfurter.app/currencies`);
      const response = await data.json();
      setCurrencies(Object.keys(response).map((v) => v));
    } catch (error) {
      console.log(error);
    }
  };
const handleSwap =()=>{
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
}
  return (
    <>
      <h1>Currency Converter</h1>

      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.selectFields}>
            <SelectComponent currencies={currencies} label={"From"} 
            onChangeCurrency={setFromCurrency} selectedCurrency={fromCurrency} savedCountries={savedCountries} setSavedCountries={setSavedCountries}/>
            <img
            onClick={handleSwap}
              src={"https://cdn-icons-png.flaticon.com/128/10520/10520486.png"}
              alt="swap"
            />
            <SelectComponent currencies={currencies} label={"To"} 
            onChangeCurrency={setToCurrency} selectedCurrency={toCurrency} savedCountries={savedCountries} setSavedCountries={setSavedCountries}/>
          </div>
          <input value={inputValue} className={styles.inputField} type="number" 
          onChange={(e)=>setInputValue(e.target.value)}/>
          <div className={styles.buttonField}>
            <button onClick={handleFetchCurrencies}>Convert</button>
          </div>
          <span className={styles.result}>{ loading ? 'Loading...' : resultStatus}</span>
        </div>
      </div>
    </>
  );
}

export default CurrencyConversion;
