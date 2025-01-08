import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/32b756f57b06a8eb86b301f7/latest/${currency}`)
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