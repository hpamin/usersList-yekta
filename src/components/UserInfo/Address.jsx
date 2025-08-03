import React from 'react';
import {MapPin} from "lucide-react";

const AddressInfo = (
    {
        address
    }
) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-green-500"/>
                Address
            </h2>

            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4 space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">
                    {address.street}, {address.suite}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                    {address.city}, {address.zipcode}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Geo: {address.geo.lat}, {address.geo.lng}
                </p>
            </div>
        </div>
    )
};

export default AddressInfo;