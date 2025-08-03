import {useFetchResource} from "@/hooks/useFetchResource.js";
import {useEffect, useState} from "react";

export const useFilteredUser = (resource) => {
    const {
        data,
        error,
        loading,
        errorMessage,
    } = useFetchResource(resource);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        if (!data) return
        const filtered = data?.filter((user) => {
            return user?.name?.toLowerCase().includes(search.toLowerCase()) || user?.email?.toLowerCase().includes(search.toLowerCase())
        })
        setFilteredData(filtered)
    }, [search, data]);


    return {
        search,
        setSearch,
        filteredData,
        loading,
        error,
        errorMessage,
    }
}