import CoursePage from "@/components/course/CoursePage";
import courses from "@/utils/data/courses";
import lessons from "@/utils/data/lessons";
import sessions from "@/utils/data/sessions";
import { notFound } from "next/navigation";

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const course = courses.find((c) => c.id.toString() === id);
    if (!course) return notFound()
    return(
        <CoursePage
            course={course}
            courseLessons={lessons}
            courseSessions={sessions}
        />
    )
}