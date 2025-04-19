import { User } from '@/types/User';
import Image from 'next/image';

interface InstructorInfoCardProps extends User {
    coursesCount: number;
}

export default function InstructorInfoCard({ name, image, bio, coursesCount }: InstructorInfoCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    className="rounded-full object-cover"
                />
            </div>

            <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1 text-justify">{bio}</p>
                <div className="mt-3 text-sm sm:text-base text-primary font-medium">
                    📚 {coursesCount} {coursesCount === 1 ? 'course' : 'courses'}
                </div>
            </div>
        </div>
    );
}