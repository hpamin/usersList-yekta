import React from 'react';
import {cn} from "@/lib/utils.js";

const EmptyStatePrimary = (
    {
        icon : Icon,
        title,
        description,
        descriptionClassName,
        titleClassName,
        className,
        ...props
    }
) => {

    return (
        <div
            className={cn("flex flex-col justify-center items-center", className)}
            {...props}
        >
            <Icon
                className={"w-20 h-20 text-gray-900"}
            />
            <h3 className={cn("mt-2 text-lg font-medium text-gray-900 dark:text-white", titleClassName)}>
                {title}
            </h3>
            <p className={cn("mt-1 text-sm text-gray-500 dark:text-gray-400", descriptionClassName)}>
                {description}
            </p>
        </div>
    );
};
export default EmptyStatePrimary;