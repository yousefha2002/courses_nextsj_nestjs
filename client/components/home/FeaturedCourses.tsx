import Container from "../ui/Container";
import courses from '@/utils/data/courses'
import CourseCard from '@/components/home/CourseCard'
import Link from "next/link";
import CardGrid from "../ui/CardGrild";

export default function FeaturedCourses() {
        return (
        <section className="py-20 bg-white">
            <Container>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
                Featured Courses
            </h2>
            <CardGrid
                data={courses}
                renderItem={(course) => <CourseCard key={course.id} {...course} />}
            />
            <div className="mt-12 text-center">
                <Link
                    href="/courses"
                    className="inline-block text-primary hover:underline text-lg font-medium"
                >
                    Show More Courses →
                </Link>
            </div>
            </Container>
        </section>
        );
}