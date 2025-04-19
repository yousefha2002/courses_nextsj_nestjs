import Image from "next/image";

interface CourseHeaderProps {
    title: string;
    description: string;
    image: string;
    price: number;
    instructorName: string;
}

export default function CourseHeader({title,description,image,price,instructorName,
}: CourseHeaderProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="relative w-full h-80">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-6 bg-gray-50 rounded-b-lg">
                <h1 className="text-4xl font-semibold text-gray-900 mb-4">{title}</h1>
                <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
                
                <div className="flex items-center space-x-4 mb-6">
                <span className="text-xl font-semibold text-primary">${price}</span>
                </div>

                <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {instructorName.charAt(0)}
                </div>
                <div>
                    <p className="text-gray-600 text-sm">Instructor</p>
                    <p className="text-gray-900 font-medium">{instructorName}</p>
                </div>
                </div>
            </div>
        </div>
    );
}