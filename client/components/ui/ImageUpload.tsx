'use client';
import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

type Props = {
    name: string;
    required?: boolean;
};

export default function ImageUpload({ name, required = false }: Props) {
    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>

        <div className="flex items-center gap-4">
            <div className="relative group">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 bg-gray-100 shadow-sm">
                {preview ? (
                <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                    <FaCamera className="text-2xl" />
                </div>
                )}
            </div>

            <label
                htmlFor="image-upload"
                className="absolute inset-0 rounded-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white cursor-pointer transition"
            >
                <FaCamera className="text-xl" />
            </label>
            </div>

            <div>
            <input
                id="image-upload"
                type="file"
                accept="image/*"
                name={name}
                required={required}
                onChange={handleChange}
                className="hidden"
            />
            <p className="text-sm text-gray-500">Click the image to upload</p>
            </div>
        </div>
        </div>
    );
}