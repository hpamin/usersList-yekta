import React from 'react';
import {cn} from "@/lib/utils.js";
import CompanyInfo from "@/components/UserInfo/Company.jsx";
import AddressInfo from "@/components/UserInfo/Address.jsx";
import ItemInfo from "@/components/UserInfo/Item.jsx";
import PersonalInfo from "@/components/UserInfo/Personal.jsx";

const UserInfo = (
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
UserInfo.Item = ItemInfo
UserInfo.Company = CompanyInfo
UserInfo.Address = AddressInfo
UserInfo.Personal = PersonalInfo

export default UserInfo;