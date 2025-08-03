import React from 'react';
import {Link} from "react-router-dom";
import {ArrowLeft} from "lucide-react";

const BackToUsersLink = (
    {
        title = "Back to Users",
        link,
    }
) => {

    return (
        <Link
            to={`/${link}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6"
        >
            <ArrowLeft className="h-5 w-5 mr-2"/>
            {title}
        </Link>
    );
};

export default BackToUsersLink;