import React from 'react';
import {Building} from "lucide-react";

const CompanyInfo =
    (
        {
            company
        }
    ) => {

        if (!company) return null;

        return (
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <Building className="h-5 w-5 mr-2 text-purple-500"/>
                    Company
                </h2>

                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4 space-y-2">
                    <p className="font-medium text-gray-900 dark:text-white">
                        {company?.name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 italic">
                        "{company?.catchPhrase}"
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {company?.bs}
                    </p>
                </div>
            </div>
        );
    };

export default CompanyInfo;