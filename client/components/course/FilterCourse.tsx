import React from 'react'

export default function FilterCourse() {
    return (
        <div className="mb-8">
            <input
                type="text"
                placeholder="Search courses by name..."
                className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
    )
}
