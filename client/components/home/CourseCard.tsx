import Link from "next/link";
import {Course} from '@/types/Course'
import Image from "next/image";

export default function CourseCard({id,title,description,image,price,}: Course) {
return (
    <div className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
        <Image
            src={image}
            alt={title}
            width={192}
            height={192}
            className="w-full h-48 rounded-t-lg"
        />
        <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <div className="flex items-center justify-between">
            <span className="text-primary font-semibold">{price}</span>
            <Link
                href={`/courses/${id}`}
                className="text-sm text-primary hover:underline"
            >
                View Course →
            </Link>
            </div>
        </div>
        </div>
    );
}