'use client';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

interface NotFoundProps {
    message?: string;
}

export default function NotFound({ message = "The page you're looking for could not be found." }: NotFoundProps) {
    return (
        <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
            <p className="text-gray-600 text-lg mb-6 max-w-md">{message}</p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition"
            >
                <FaArrowLeft className="text-sm" />
                Back to Home
            </Link>
            </div>
    );
}