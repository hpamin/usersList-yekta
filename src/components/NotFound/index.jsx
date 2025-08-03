import React from 'react';
import {cn} from "@/lib/utils.js";
import NotFoundPrimary from "@/components/NotFound/NotFoundPrimary.jsx";

const NotFound = (
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
NotFound.Primary = NotFoundPrimary
export default NotFound;