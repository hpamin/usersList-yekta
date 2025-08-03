import React from 'react';
import {UserIcon} from "lucide-react";

const UserHeader = (
    {
        name,
        username
    }
) => {

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white rounded-t-xl">
            <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                    <UserIcon className="h-8 w-8"/>
                </div>
                <div>
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-blue-100">@{username}</p>
                </div>
            </div>
        </div>
    )
}

export default UserHeader