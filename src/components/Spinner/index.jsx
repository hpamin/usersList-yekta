import React from 'react';
import {cn} from "@/lib/utils.js";
import SpinnerPrimary from "@/components/Spinner/SpinnerPrimary.jsx";

const Spinner = (
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
Spinner.Primary = SpinnerPrimary

export default Spinner;