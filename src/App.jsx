import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './customHook/useCurrencyInfo'
import CurrencyBox from './components/CurrencyBox'

function App() {

  const currencyInfo = useCurrencyInfo('USD')

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const options = currencyInfo.conversion_rates ? Object.keys(currencyInfo.conversion_rates) : [];
  
  function convert() {
    setConvertedAmount(amount * currencyInfo.conversion_rates[to]);
  }
  

  return (
    <div className='main-container'>
      <h1>Currency Convertor</h1>
        <CurrencyBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
        />


        <CurrencyBox label="TO" 
          amount={convertedAmount} 
          currencyOptions={options} 
          onCurrencyChange={(currency) => setTo(currency)} 
          selectCurrency={to} 
        />

        <button className='submit-button' onClick={convert}>Convert</button>
    </div>
  )
}

export default App
