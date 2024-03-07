import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css";

function Search() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/search/trending')
      .then(response => {
        setTrendingCoins(response.data.coins.slice(0, 3)); // Slice to select only the first 3 elements
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching trending coins:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='main'>
      <h2 className='trend'>Trending Coins (24h)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {trendingCoins.map((coin, index) => (
            <div className='sub' key={index}> <img src={coin.item.small} alt={coin.item.name}/>{coin.item.name}({coin.item.symbol})</div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;

