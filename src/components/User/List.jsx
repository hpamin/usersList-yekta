import React from 'react';
import {cn} from "@/lib/utils.js";
import User from "@/components/User/index.jsx";
import {SearchX} from "lucide-react";
import EmptyState from "@/components/EmptyState/index.jsx";

const UserList = (
    {
        data,
        loading,
        className,
        ...props
    }
) => {

    return (
        <div
            className={cn(
                "w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6 px-4 sm:px-6 lg:px-8",
                data?.length <= 0 && "flex",
                className
            )}
            {...props}
        >
            {loading ? (
                Array
                    .from({length: 8})
                    .map((_, index) => (
                        <User.Skeleton
                            key={index}
                        />
                    ))
            ) : data?.length > 0 ? (
                data.map((item, index) => (
                    <User.Card
                        key={`user-${index}`}
                        data={item}
                    />
                ))
            ) : (
                <div className={"w-full flex justify-center items-center"}>
                <EmptyState.Primary
                    className={"mt-20"}
                    icon={SearchX}
                    title={"Item Not Found!"}
                    description={"Try adjusting your search or filter to find what you're looking for."}
                />

                </div>
            )}
        </div>
    );
};

export default UserList;