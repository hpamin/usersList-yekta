import React from 'react';
import UserInfo from "@/components/UserInfo/index.jsx";
import {Globe, Mail, Phone, UserIcon,} from "lucide-react";

const PersonalInfo = (
    {
        email,
        phone,
        website
    }) => {


    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <UserIcon className="h-5 w-5 mr-2 text-blue-500"/>
                Personal Information
            </h2>

            <div className="space-y-4">
                <UserInfo.Item
                    Icon={Mail}
                    label="Email"
                >
                    <p className="text-gray-900 dark:text-white break-all">
                        {email}
                    </p>
                </UserInfo.Item>

                <UserInfo.Item
                    Icon={Phone}
                    label="Phone"
                >
                    <p className="text-gray-900 dark:text-white">
                        {phone}
                    </p>
                </UserInfo.Item>

                <UserInfo.Item
                    Icon={Globe}
                    label="Website"
                >
                    <a
                        href={`https://${website}`}
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {website}
                    </a>
                </UserInfo.Item>
            </div>
        </div>
    )
};

export default PersonalInfo;