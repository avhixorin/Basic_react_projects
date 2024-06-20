import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({ loading: true, error: null, info: null });

    useEffect(() => {
        let isMounted = true;
        
        const fetchCurrencyInfo = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/4ec39c1dde0207d57e074a5a/latest/${currency}.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                if (isMounted) {
                    setData({ loading: false, error: null, info: result.conversion_rates[currency] });
                }
            } catch (error) {
                if (isMounted) {
                    setData({ loading: false, error: error.message, info: null });
                }
            }
        };

        fetchCurrencyInfo();

        return () => {
            isMounted = false;
        };
    }, [currency]);

    return data;
};

export default useCurrencyInfo;
