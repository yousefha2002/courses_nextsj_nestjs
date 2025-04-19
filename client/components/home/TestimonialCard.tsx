import Image from "next/image";

interface TestimonialCardProps {
    name: string;
    role: string;
    message: string;
    image: string;
}

export default function TestimonialCard({name,role,message,image}: TestimonialCardProps) {
        return (
        <div className="text-center bg-white p-8 rounded-lg shadow-md transition hover:shadow-xl">
            <Image
                width={64}
                height={64}
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 text-lg italic mb-4">"{message}"</p>
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-500 text-sm">{role}</p>
        </div>
    );
}