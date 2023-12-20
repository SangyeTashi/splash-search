import { useState, useEffect } from 'react';
import axios from 'axios';
function useFetch(url, params = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const baseUrl = 'https://api.unsplash.com/';

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        axios
            .get(`${baseUrl}${url}`, {
                headers: {
                    Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
                },
                params: params,
                signal: controller.signal,
            })
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                if (!controller.signal.aborted) {
                    setError(err);
                }
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            controller.abort();
        };
    }, [url, params.query]);

    return [data, loading, error];
}

export default useFetch;
