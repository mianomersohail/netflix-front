import { useState } from 'react';
import axios from 'axios';
const useApi2 = (baseURL) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const request = async (method, url,options) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios({
                method,
                url: `${baseURL}${url}`,
                options
              
            });
            setData(response.data);
            return response.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };
    const get = (url,options ) => request('GET', url,options );
    
    return { loading, error, data, get };
};
export default useApi2;