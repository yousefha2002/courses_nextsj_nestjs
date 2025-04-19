import NotFound from '@/app/not-found';
import CourseCard from '@/components/home/CourseCard';
import InstructorInfoCard from '@/components/instructor/InstructorInfoCard';
import CardGrid from '@/components/ui/CardGrild';
import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import courses from '@/utils/data/courses';
import users from '@/utils/data/users';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const instructor = users.find(user => user.id.toString() === id);
    const instructorCourses = courses.filter(course => course.instructorId.toString() === id);

    if (!instructor) {notFound()}

    return (
        <Container className="py-10 space-y-10">
            <InstructorInfoCard {...instructor} coursesCount={instructorCourses.length} />
            <Title 
                title={`${instructor.name}'s Courses`}
                content={`Explore the courses created by ${instructor.name}`}
            />
            <CardGrid
                data={instructorCourses}
                renderItem={(course) => <CourseCard key={course.id} {...course} />}
            />
        </Container>
    );
}