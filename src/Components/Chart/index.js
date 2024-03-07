// TradingViewWidget.jsx
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function Chart() {
  const container = useRef();

  useEffect(
    () => {
    const script = document.createElement("script");
     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "COINBASE:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "withdateranges": true,
          "details": true,
          "hotlist": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
   
       <div className="tradingview-widget-container__widget"   ref={container}></div> 
     
 
  );
}

export default memo(Chart);


