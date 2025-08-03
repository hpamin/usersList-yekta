import React from 'react';
import {cn} from "@/lib/utils.js";
import BackToUsersLink from "@/components/BackArrow/BackToUsersLink.jsx";

const BackArrow = (
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

BackArrow.UsersList = BackToUsersLink
export default BackArrow;