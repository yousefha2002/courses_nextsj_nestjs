'use client';
import React, { useState } from 'react';
import InputField from '@/components/ui/InputField';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import RoleToggle from '@/components/ui/RoleToggle';
import { userRole } from '@/utils/enums/userRole';
import Link from 'next/link';

export default function LoginPage() {
    const [role, setRole] = useState<userRole.instructor | userRole.student>(userRole.student);

    return (
        <Container className="py-16 max-w-md mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
                <Title title="Login" content={`Login as a ${role}`} className="text-center mb-6" />

                {/* Toggle Role */}
                <RoleToggle value={role} onChange={setRole} />

                {/* Login Form */}
                <form className="space-y-4">
                    <InputField
                        name="email"
                        type="email"
                        required
                        placeholder="Email"
                        icon={FaEnvelope}
                    />
                    <InputField
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        icon={FaLock}
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-primary text-white font-semibold rounded-md mt-2 hover:bg-primary-dark transition"
                    >
                        Login
                    </button>
                </form>

                {/* Register Message */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <Link
                        href="/register"
                        className="text-primary font-medium hover:underline"
                    >
                        Register here
                    </Link>
                </p>
            </div>
        </Container>
    );
}