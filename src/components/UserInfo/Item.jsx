import React from 'react';

const ItemInfo = (
    {
        Icon,
        label,
        children
    }
) => {

    return (
        <div className="flex items-start">
            <Icon
                className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-3 mt-0.5"/>
            <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
                {children}
            </div>
        </div>
    )
};

export default ItemInfo;