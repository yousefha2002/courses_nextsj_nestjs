import { Course } from "@/types/Course";
import Image from "next/image";
import Link from "next/link";

interface props extends Course{
    progress: number;
    nextLesson: string;
    nextSession: {
    date: string;
    link: string;
};
}

export default function CourseCardDashboard ({ id,title,image,progress,nextLesson,nextSession }: props ) {
    return (
        <div className="bg-white rounded-2xl shadow p-4">
            <Image
                src={image}
                alt={title}
                width={160}
                height={160}
                className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <Link href={`/courses/${id}`}>
                <h3 className="text-lg font-bold">{title}</h3>
            </Link>
            <p className="text-sm text-gray-600 mb-2">
                Next: {nextLesson}
            </p>
            <div className="flex justify-between items-center">
                <Link href={nextSession.link} className="text-sm text-primary underline">
                Join Next Session
                </Link>
                <span className="text-sm text-gray-500">
                    {new Date(nextSession.date).toLocaleDateString()}
                </span>
            </div>
            <div className="w-full bg-gray-200 h-2 mt-4 rounded">
                <div
                    className="bg-primary h-2 rounded"
                    style={{ width:`${progress}%` }}
                >
                </div>
            </div>
        </div>
    );
}