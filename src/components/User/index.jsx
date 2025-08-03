import React from 'react';
import {cn} from "@/lib/utils.js";
import UserCard from "@/components/User/Card.jsx";
import UserList from "@/components/User/List.jsx";
import UserSkeleton from "@/components/User/Skeleton.jsx";

const User = (
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

User.Card = UserCard
User.List = UserList
User.Skeleton = UserSkeleton
export default User;