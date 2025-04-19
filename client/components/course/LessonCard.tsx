import { Lesson } from "@/types/Lesson";
import Link from "next/link";

export default function LessonCard({ title, videoUrl }: Lesson) {
    return (
        <div className="p-4 bg-white rounded shadow mb-4">
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <Link
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
                >
                Watch Video
            </Link>
        </div>
    );
}
