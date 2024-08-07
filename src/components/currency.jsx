import React, { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_ELNM6bdnn12il1MlVefuWLyFse2qCbXvFBZ47ZEN";


function Currency() {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async()=>{
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const result = (response.data.data[toCurrency]*amount).toFixed(2);
    setResult(result);
  }

  return (
    <div className="currency-div">
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "arial",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <h3>Currency App</h3>
      </div>
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaRegArrowAltCircleRight className="right-icon" />

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>EUR</option>
          <option>TRY</option>
          <option>USD</option>
        </select>

        <input value={result} onChange={(e)=>setResult(e.target.value)} type="number" className="result" />
      </div>
      <div>
        <button onClick={exchange} className="exchange-button">Convert</button>
      </div>
    </div>
  );
}

export default Currency;
