import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css";

function YouMayAlsoLike() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    // Fetch trending coins data from the API
    axios.get('https://api.coingecko.com/api/v3/search/trending')
      .then(response => {
        setTrendingCoins(response.data.coins);
        console.log(response)
      })
      .catch(error => {
        console.error('Error fetching trending coins:', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='first'>
      <h2 className='new'>You May Also Like</h2>
      <Slider {...settings} className='second'>
        {trendingCoins.map((coin, index) => (
          <div key={index} className="coin-item">
            <img src={coin.item.small} alt={coin.item.name} />
            <p className='sym'>Symbol: {coin.item.symbol}</p>
            <p>Price: {coin.item.data.price}</p>
          
            <img src={coin.item.data.price_change_percentage_24h.sparkline} alt={coin.item.name + ' Graph'} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default YouMayAlsoLike;
