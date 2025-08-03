import React from 'react';
import {cn} from "@/lib/utils.js";

const InfoField = (
    {
        label,
        value,
        className = ""
    }
    ) => {
    return (
        <div className={cn("flex flex-col", className)}>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {label}
            </p>
            <p className="mt-1 text-sm text-gray-900 dark:text-white break-all">
                {value || '-'}
            </p>
        </div>
    );
};

export default InfoField;