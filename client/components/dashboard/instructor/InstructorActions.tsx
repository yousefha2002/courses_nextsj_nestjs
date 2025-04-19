'use client';
import React from 'react';
import Link from 'next/link';

type Action = {
    label: string;
    href: string;
    className: string;
};

const actions: Action[] = [
    {
        label: 'Add New Course',
        href: '/dashboard/instructor/add-course',
        className: 'bg-pink-100 text-pink-800 hover:bg-pink-200',
    },
    {
        label: 'Edit Profile',
        href: '/dashboard/instructor/edit-profile',
        className: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    },
    {
        label: 'Edit Email',
        href: '/dashboard/instructor/edit-email',
        className: 'bg-green-100 text-green-800 hover:bg-green-200',
    },
    {
        label: 'Edit Password',
        href: '/dashboard/instructor/edit-password',
        className: 'bg-red-100 text-red-800 hover:bg-red-200',
    },
];

export default function InstructorActions() {
    return (
        <div className="flex flex-wrap gap-3">
            {actions.map((action, index) => (
                <Link key={index} href={action.href}>
                    <button className={`btn ${action.className}`}>
                        {action.label}
                    </button>
                </Link>
            ))}
        </div>
    );
}