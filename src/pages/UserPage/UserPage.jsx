import React from 'react';
import {cn} from "@/lib/utils.js";
import SearchBar from "@/components/SearchBar/index.jsx";
import {useFilteredUser} from "@/hooks/useFilteredUser.js";
import ErrorState from "@/components/ErrorState/index.jsx";
import User from "@/components/User/index.jsx";

const UserPage = (
    {
        className,
        ...props
    }
) => {

    const {
        search,
        setSearch,
        filteredData,
        error,
        loading,
        errorMessage
    } = useFilteredUser("users");

    return (
        <div
            className={cn(
                "min-h-screen bg-gray-50 dark:bg-gray-900",
                "py-8 px-4 sm:px-6 lg:px-8",
                className
            )}
            {...props}
        >
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center mb-8">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        User Directory
                    </p>
                    <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
                        Search and browse through our user database
                    </p>
                </div>

                <div className="flex justify-center">
                    <SearchBar.Primary
                        search={search}
                        setSearch={setSearch}
                        className="w-full max-w-2xl"
                    />
                </div>

                {error ? (
                    <ErrorState.Primary
                        errorMessage={errorMessage}
                    />
                ) : (
                    <User.List
                        loading={loading}
                        data={filteredData}
                    />
                )}
            </div>
        </div>
    );
};

export default UserPage;