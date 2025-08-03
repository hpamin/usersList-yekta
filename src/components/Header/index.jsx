import React from 'react';
import {cn} from "@/lib/utils.js";
import UserHeader from "@/components/Header/UserHeader.jsx";

const Header = (
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

Header.User = UserHeader

export default Header;