import {useCallback, useEffect, useState} from "react";
import api from "@/lib/axios.js";

export const useFetchResource = (resource, option) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [data, setData] = useState(null);


    const fetchData = useCallback(async () => {
            if (!resource) return
            setLoading(true)
            setError(false)

            try {
                const result = await api.get(`/${resource}`, option)
                setData(result.data);
            } catch (e) {
                setError(true)
                setErrorMessage(e.message)
            } finally {
                setLoading(false)
            }
        }, [resource, JSON.stringify(option)],
    );



    useEffect(() => {
        fetchData();
    }, [resource]);

    return {
        loading,
        error,
        errorMessage,
        data,
        refetch: fetchData
    }
}