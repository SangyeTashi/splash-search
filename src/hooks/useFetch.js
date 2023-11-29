import { useState, useEffect } from 'react';
import axios from 'axios';
function useFetch(url, params = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const baseUrl = 'https://api.unsplash.com/';
    useEffect(() => {
        setLoading(true);
        axios
            .get(`${baseUrl}${url}`, {
                headers: {
                    Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
                },
                params: params,
            })
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [url, params.query]);

    return [data, loading, error];
}

export default useFetch;
