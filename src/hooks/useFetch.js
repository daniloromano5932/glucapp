import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Start loading
                const response = await axios.get(url, {
                    headers: {
                        user_id: 1
                      }
                });
                setData(response.data); // Update state with fetched data
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setError(err); // Handle the error
                }
            } finally {
                setLoading(false); // Ensure loading is set to false
            }
        };

        fetchData();
    }, []); // Depend on url and options

    return { data, loading, error };
}

export default useFetch;
