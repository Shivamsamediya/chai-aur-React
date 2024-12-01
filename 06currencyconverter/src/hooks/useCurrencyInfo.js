import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())  // Corrected this line
            .then((res) => setData(res[currency]));
    }, [currency]);  // Removed `data` from the dependency array

    return data;
}

export default useCurrencyInfo;
