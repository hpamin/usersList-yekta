import React from 'react';

const UserSkeleton = () => {

    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 h-48 animate-pulse"
        >
            <div className="flex items-center space-x-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
            </div>
            <div className="space-y-3">
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
            </div>
        </div>
    );
};

export default UserSkeleton;