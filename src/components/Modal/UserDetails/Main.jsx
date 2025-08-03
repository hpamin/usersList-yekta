import React, {useEffect} from 'react';
import {MapPin, User} from "lucide-react";
import UserDetailsModal from "@/components/Modal/UserDetails/index.jsx";
import {useNavigate} from "react-router-dom";

const UserDetailsModalMain = (
    {
        isOpen,
        onClose,
        data
    }
) => {
    const navigate = useNavigate();
    const onDetails = () => {
        navigate(`/users/${data.id}`);
    }

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            document.addEventListener('keydown', handleEscape)
        }
        return () => {
            document.body.style.overflow = ''
            document.removeEventListener('keydown', handleEscape)
        };
    }, [isOpen, onClose])

    if (!isOpen) return null

    const {
        name,
        email,
        phone,
        address,
        username
    } = data || {}
    const {
        city,
        street,
        suite,
        zipcode
    } = address || {}

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300"
                onClick={e => e.stopPropagation()}
            >
                <UserDetailsModal.Header
                    title={name}
                    subtitle={`@${username}`}
                    onClose={onClose}
                />

                <div className="p-6 space-y-6">
                    <UserDetailsModal.Section
                        title="Personal Information"
                        icon={User}
                        iconBg="bg-blue-100 dark:bg-blue-900/50"
                        iconColor="text-blue-600 dark:text-blue-400"
                    >
                        <UserDetailsModal.Field
                            label="Email"
                            value={email}
                        />
                        <UserDetailsModal.Field
                            label="Phone"
                            value={phone}
                        />
                    </UserDetailsModal.Section>

                    <UserDetailsModal.Section
                        title="Address"
                        icon={MapPin}
                        iconBg="bg-green-100 dark:bg-green-900/50"
                        iconColor="text-green-600 dark:text-green-400"
                    >
                        <UserDetailsModal.Field
                            label="Street"
                            value={street}
                        />
                        <UserDetailsModal.Field
                            label="Suite"
                            value={suite}
                        />
                        <UserDetailsModal.Field
                            label="City"
                            value={city}
                        />
                        <UserDetailsModal.Field
                            label="Zipcode"
                            value={zipcode}
                        />
                    </UserDetailsModal.Section>
                </div>

                <UserDetailsModal.Footer
                    onDetails={onDetails}
                    onClose={onClose}
                />
            </div>
        </div>
    );
};

export default UserDetailsModalMain;