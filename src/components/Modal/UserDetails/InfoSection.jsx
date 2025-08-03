import React from 'react';
import {cn} from "@/lib/utils.js";

const InfoSection = (
    {
        title,
        icon: Icon,
        iconBg = "bg-blue-100 dark:bg-blue-900/50",
        iconColor = "text-blue-600 dark:text-blue-400",
        children,
        className = ""
    }
) => {
    return (
        <div className={cn("flex items-start", className)}>
            <div
                className={cn("h-10 w-10 rounded-full flex items-center justify-center", iconBg)}
            >
                <Icon className={cn("h-5 w-5", iconColor)}/>
            </div>
            <div className="ms-4 flex-1">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                    {title}
                </p>
                <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;