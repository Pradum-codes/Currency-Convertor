import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {

    const apiKey = process.env.REACT_APP_API_KEY;
        
    const [data, setData] = useState({});

    useEffect(() => {
        
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`);
          .then((res) => res.json())
          .then((res) => {
            if (res && res.conversion_rates) {
              setData(res);
            } else {
              console.error("Invalid API response:", res);
            }
          })
          .catch((error) => console.error("Fetch error:", error));
      }, [currency]);
      
    return (data)
}

export default useCurrencyInfo;
