import React from 'react';
import {cn} from "@/lib/utils.js";
import {Search, X} from "lucide-react";

const SearchBarPrimary = (
    {
        search,
        setSearch,
        className,
        placeholder = "Search...",
        ...props
    }
) => {

    return (
        <div
            className={cn("relative w-full max-w-md mx-auto", className)}
            {...props}
        >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                    className="h-5 w-5 text-gray-400 dark:text-gray-500"
                />
            </div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={placeholder}
                className={`
                    block w-full pl-10 pr-3 py-3 rounded-lg border
                    bg-white dark:bg-gray-800
                    text-gray-900 dark:text-white
                    border-gray-300 dark:border-gray-600
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    dark:focus:ring-blue-500 dark:focus:border-blue-500
                    shadow-sm transition duration-200
                    placeholder-gray-400 dark:placeholder-gray-500
                    focus:outline-none
                `}
            />
            {search && (
                <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                    <X
                        className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                    />
                </button>
            )}
        </div>
    );
};

export default SearchBarPrimary;