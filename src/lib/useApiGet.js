import React, {useState, useEffect} from "react";

const useApiGet = (axiosResponse, deps) => {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try {
                const response = await axiosResponse();
                setResponse(response);

                if(response.data.status === 'FAILURE') {
                    setResponse(null)
                }

                if(response.items.length === 0 ) {
                    setResponse(null)
                }
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
    }, deps);

    return [loading, response, error];
};

export default useApiGet;