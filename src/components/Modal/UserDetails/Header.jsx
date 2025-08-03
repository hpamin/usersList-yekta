import React from 'react';
import {cn} from "@/lib/utils.js";
import {X} from "lucide-react";

const ModalHeader = (
    {
        title,
        subtitle,
        onClose,
        className,
    }
) => {
    return (
        <div
            className={cn("sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-start", className)}>
            <div className={"flex flex-col gap-1 items-start justify-center"}>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {title}
                </p>
                {subtitle &&
                    <p className="text-gray-500 dark:text-gray-400">
                        {subtitle}
                    </p>
                }
            </div>
            <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
                <X
                    className="h-6 w-6"
                />
            </button>
        </div>
    );
};
export default ModalHeader;