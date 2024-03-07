import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';


function Data() {
  // State to store Bitcoin data
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true')
      .then((response) => {
        // Set Bitcoin data from the response
        console.log(response)
        setBitcoinData(response.data.bitcoin);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  }, []); // Empty dependency array to run effect only once

  return (
    <div className='chart'>
      Cryptocurrencies >> <p className='p'>Bitcoin</p>
      <div className='pic'>
        <h1>Bitcoin</h1>
        {/* Display Bitcoin data if available */}
        {bitcoinData && (
          <div>
            <p>Price in USD: ${bitcoinData.usd}</p>
            <p>Price in INR: Rs.{bitcoinData.inr}</p>
            <p>24h Change (USD): {bitcoinData.usd_24h_change}</p>
            <p>24h Change (INR): {bitcoinData.inr_24h_change}</p>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Data;

