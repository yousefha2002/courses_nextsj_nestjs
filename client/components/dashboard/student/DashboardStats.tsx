import React from 'react';

interface StatsProps {
    coursesCount: number;
    completedLessons: number;
    upcomingSessions: number;
}

export default function DashboardStats({ coursesCount, completedLessons, upcomingSessions }: StatsProps) {
    const stats = [
        {
            label: 'Enrolled Courses',
            value: coursesCount,
            icon: '📘',
        },
        {
            label: 'Completed Lessons',
            value: completedLessons,
            icon: '✅',
        },
        {
            label: 'Upcoming Sessions',
            value: upcomingSessions,
            icon: '📅',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, idx) => (
                <div
                    key={idx}
                    className="bg-white shadow rounded-xl p-5 flex items-center space-x-4"
                >
                    <div className="text-3xl">{stat.icon}</div>
                    <div>
                        <p className="text-lg font-semibold text-gray-800">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}