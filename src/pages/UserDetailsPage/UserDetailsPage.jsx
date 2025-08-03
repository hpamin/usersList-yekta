import React from 'react';
import {cn} from "@/lib/utils.js";
import {useFetchResource} from "@/hooks/useFetchResource.js";
import {useParams} from "react-router-dom";
import {AlertTriangleIcon} from 'lucide-react';
import Spinner from "@/components/Spinner/index.jsx";
import NotFound from "@/components/NotFound/index.jsx";
import UserInfo from "@/components/UserInfo/index.jsx";
import Header from "@/components/Header/index.jsx";
import BackArrow from "@/components/BackArrow/index.jsx";

const UserDetailsPage = ({
                             className,
                             ...props
                         }) => {
    const {id} = useParams();
    const {
        data,
        error,
        errorMessage,
        loading
    } = useFetchResource('users');

    const selectedUser = data?.find((user) => +user.id === +id);

    if (loading) {
        return (
            <Spinner.Primary/>
        );
    }

    if (error || !selectedUser) {
        return (
            <NotFound.Primary
                icon={AlertTriangleIcon}
                classNameIconWrapper={"bg-red-100 dark:bg-red-900/20"}
                classNameIcon={" text-red-500"}
                link={"/users"}
                error={error}
                errorMessage={errorMessage}
                linkTitle={"Back to Users"}
            />
        );
    }

    const {
        name,
        username,
        email,
        phone,
        website,
        address,
        company
    } = selectedUser;

    return (
        <div
            className={cn("min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8", className)}
            {...props}
        >
            <div className="max-w-4xl mx-auto">
                <BackArrow.UsersList
                    link={"users"}
                />

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <Header.User
                        name={name}
                        username={username}
                    />

                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <UserInfo.Personal
                            email={email}
                            phone={phone}
                            website={website}
                        />
                        <div className="space-y-6">
                            <UserInfo.Address
                                address={address}
                            />
                            <UserInfo.Company
                                company={company}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsPage;