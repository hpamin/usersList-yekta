import React from 'react';
import {cn} from "@/lib/utils.js";

const SpinnerPrimary = (
    {
        className,
        ...props
    }
) => {

    return (
        <div
            className={cn("flex justify-center items-center py-10", className)}
            {...props}
        >
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );
};

export default SpinnerPrimary;