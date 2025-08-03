import React from 'react';
import {cn} from "@/lib/utils.js";

const ModalFooter =  (
    {
        actionDetails = "More",
        onDetails,
        onClose,
        actionText = "Close",
        className,
    }
    ) => {
    return (
        <div className={cn("sticky bottom-0 bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between", className)}>
            <button
                onClick={onClose}
                className="px-4 py-2 border text-gray-900 rounded-lg hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
            >
                {actionText}
            </button>
            <button
                onClick={onDetails}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
            >
                {actionDetails}
            </button>
        </div>
    );
};

export default ModalFooter;