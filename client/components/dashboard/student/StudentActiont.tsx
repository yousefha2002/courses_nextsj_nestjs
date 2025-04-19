import React from 'react';
import Link from 'next/link';
import { FaUserEdit, FaEnvelope, FaLock } from 'react-icons/fa';

const actions = [
    {
        label: 'Edit Profile',
        href: '/dashboard/student/edit-profile',
        icon: <FaUserEdit className="text-xl text-blue-500" />,
        bg: 'bg-blue-50 hover:bg-blue-100',
    },
    {
        label: 'Edit Email',
        href: '/dashboard/student/edit-email',
        icon: <FaEnvelope className="text-xl text-green-500" />,
        bg: 'bg-green-50 hover:bg-green-100',
    },
    {
        label: 'Edit Password',
        href: '/dashboard/student/edit-password',
        icon: <FaLock className="text-xl text-red-500" />,
        bg: 'bg-red-50 hover:bg-red-100',
    },
];

export default function StudentActions() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
            {actions.map((action, idx) => (
                <Link key={idx} href={action.href}>
                    <div
                        className={`cursor-pointer p-5 rounded-xl shadow-sm border border-gray-200 transition duration-200 ${action.bg}`}
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-white rounded-full shadow">{action.icon}</div>
                            <div>
                                <p className="text-gray-700 font-semibold">{action.label}</p>
                                <p className="text-xs text-gray-500">Manage your {action.label.toLowerCase()}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}