import React from 'react';
import {cn} from "@/lib/utils.js";
import {X} from "lucide-react";

const ErrorStatePrimary = (
    {
        errorMessage,
        ...props
    }
) => {

    return (
        <div
            className="rounded-md bg-red-50 dark:bg-red-900/20 p-4"
            {...props}
        >
            <div className="flex justify-start items-center">
                <X
                    className="h-5 w-5 text-red-400 dark:text-red-300"
                />
                <div className="ms-3 flex flex-col justify-center items-start">
                    <p className="text-sm font-medium text-red-800 dark:text-red-200">
                        Error loading users
                    </p>
                    <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                        {errorMessage}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorStatePrimary;