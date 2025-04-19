import React from 'react';
import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import CourseCard from '@/components/home/CourseCard';
import CardGrid from '@/components/ui/CardGrild';
import users from '@/utils/data/users';
import courses from '@/utils/data/courses';
import InstructorInfoCard from '@/components/instructor/InstructorInfoCard';
import InstructorActions from '@/components/dashboard/instructor/InstructorActions';

export default function InstructorDashboardPage() {
    const instructor = users[0];

    return (
        <Container className="py-10 space-y-12">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <Title title="Instructor Dashboard" />
                <InstructorActions />
            </div>

            {/* Instructor Info */}
            <InstructorInfoCard {...instructor} coursesCount={3} />

            {/* Courses Section */}
            <div>
                <Title title="My Courses" className="mb-4" />
                <CardGrid
                    data={courses}
                    renderItem={(course) => (
                        <CourseCard key={course.id} {...course} />
                    )}
                />
            </div>
        </Container>
    );
}