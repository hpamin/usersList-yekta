import React, {useState} from 'react';
import {cn} from "@/lib/utils.js";
import {LucideVoicemail, Mail, Phone} from "lucide-react";
import UserDetailsModal from "@/components/Modal/UserDetails/index.jsx";

const UserCard = (
    {
        data,
        className,
        ...props
    }
) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {name, email, phone, address} = data || {};
    const {city} = address || {};


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div
                onClick={() => openModal(true)}
                className={cn(
                    "w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer",
                    "border border-gray-200 dark:border-gray-700",
                    className
                )}
                {...props}
            >
                <div className="p-6 sm:p-8">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="flex-shrink-0">
                            <div
                                className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                                {name?.charAt(0)?.toUpperCase()}
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-lg font-bold text-gray-900 dark:text-white truncate">
                                {name}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                {city}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Mail className={"w-4 h-4 text-gray-400"}/>
                            <p className="text-sm text-gray-600 dark:text-gray-300 break-all">
                                {email}
                            </p>
                        </div>


                        <div className="flex items-center gap-2">
                            <Phone className={"w-4 h-4 text-gray-400"}/>
                            <p className="text-sm text-gray-600 dark:text-gray-300 break-all">
                                {phone}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <UserDetailsModal.Main
                isOpen={isModalOpen}
                onClose={closeModal}
                data={data}
            />
        </>
    );
};

export default UserCard;