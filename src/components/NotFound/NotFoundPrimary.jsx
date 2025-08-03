import React from "react";
import {Link} from "react-router-dom";
import {cn} from "@/lib/utils.js";

const NotFoundPrimary = (
    {
        icon: Icon,
        linkTitle,
        link,
        errorMessage,
        error,
        className,
        classNameIconWrapper,
        classNameIcon
    }
) => {

    return (
        <div className={cn("flex flex-col items-center justify-center h-[100dvh] text-center p-4", className)}>
            <div className={cn("rounded-full p-4 mb-4", classNameIconWrapper)}>
                <Icon
                    className={cn("h-12 w-12", classNameIcon)}
                />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {error ? "Error loading user" : "User not found"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                {errorMessage || "The requested user does not exist."}
            </p>
            <Link
                to={link}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                {linkTitle}
            </Link>
        </div>
    );
};

export default NotFoundPrimary;
