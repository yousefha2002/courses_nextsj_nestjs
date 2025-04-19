import { Lesson } from "@/types/Lesson";
import LessonCard from "./LessonCard";

interface LessonListProps {
    lessons: Lesson[];
}

export default function LessonList({ lessons }: LessonListProps) {
    return (
        <div>
        {lessons.map((lesson) => (
            <LessonCard key={lesson.id} {...lesson} />
        ))}
        </div>
    );
}
