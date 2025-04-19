'use client';
import { userRole } from '@/utils/enums/userRole';
import React from 'react';

type Props = {
    value: userRole.instructor| userRole.student;
    onChange: (role: userRole.instructor | userRole.student) => void;
};

export default function RoleToggle({ value, onChange }: Props) {
    return (
        <div className="flex justify-center gap-4 mb-6">
        {[userRole.instructor, userRole.student].map((role) => (
            <button
            key={role}
            onClick={() => onChange(role as userRole.student | userRole.instructor)}
            className={`px-4 py-2 rounded-full text-sm font-medium border capitalize ${
                value === role
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            >
            {role}
            </button>
        ))}
        </div>
    );
}