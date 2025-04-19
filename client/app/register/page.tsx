'use client';
import React, { useState } from 'react';
import InputField from '@/components/ui/InputField';
import RoleToggle from '@/components/ui/RoleToggle';
import { FaEnvelope, FaLock, FaUser, FaImage, FaInfoCircle } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import { userRole } from '@/utils/enums/userRole';
import ImageUpload from '@/components/ui/ImageUpload';

export default function page() {
    const [role, setRole] = useState<userRole.instructor| userRole.student>(userRole.student);

    return (
        <Container className="py-16 max-w-md mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
                <Title title="Register" content={`Create a ${role} account`} className="text-center mb-6" />

                <RoleToggle value={role} onChange={setRole} />

                <form className="space-y-4">
                    <InputField name="name" type="text" required placeholder="Full Name" icon={FaUser} />
                    <InputField name="email" type="email" required placeholder="Email" icon={FaEnvelope} />
                    <InputField name="password" type="password" required placeholder="Password" icon={FaLock} />
                    <ImageUpload name="image" required />
                    <InputField name="bio" type="text" required placeholder="Short Bio" icon={FaInfoCircle} />
                    <button
                        type="submit"
                        className="w-full py-2 bg-primary text-white font-semibold rounded-md mt-2 hover:bg-primary-dark transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </Container>
    );
}