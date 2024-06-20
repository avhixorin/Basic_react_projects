import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchCurrencyInfo = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/4ec39c1dde0207d57e074a5a/latest/${currency}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonRes = await response.json();
                
                if (isMounted) {
                    const conversionRates = jsonRes.conversion_rates;
                    
                    setData(conversionRates);
                    setLoading(false);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error.message);
                    setLoading(false);
                }
            }
        };

        fetchCurrencyInfo();

        return () => {
            isMounted = false;
        };
    }, [currency]);
    
    return { data, loading, error };
};

export default useCurrencyInfo;
