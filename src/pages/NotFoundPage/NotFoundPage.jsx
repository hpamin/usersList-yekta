import React from 'react';
import {cn} from "@/lib/utils.js";

const NotFoundPage = (
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
            NotFoundPage
        </div>
    );
};

export default NotFoundPage;