import React from 'react';
import {cn} from "@/lib/utils.js";
import SearchBarPrimary from "@/components/SearchBar/SearchBarPrimary.jsx";

const SearchBar = (
    {
        className,
        ...props
    }
) => {

    return (
        <div
            className={cn("", className)}
            {...props}
            >

        </div>
    );
};

SearchBar.Primary = SearchBarPrimary;

export default SearchBar;