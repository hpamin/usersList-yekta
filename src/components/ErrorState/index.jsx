import React from 'react';
import {cn} from "@/lib/utils.js";
import ErrorStatePrimary from "@/components/ErrorState/ErrorStatePrimary.jsx";

const ErrorState = (
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
            index
        </div>
    );
};

ErrorState.Primary = ErrorStatePrimary;
export default ErrorState;