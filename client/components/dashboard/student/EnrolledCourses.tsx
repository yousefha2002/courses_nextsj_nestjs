import CardGrid from '@/components/ui/CardGrild'
import React from 'react'
import CourseCardDashboard from './CourseCardDashboard'
import Title from '@/components/ui/Title'
import { Course } from '@/types/Course'

export default function EnrolledCourses({courses}:{courses:Course[]}) {
    return (
        <div>
            <Title title='Enrolled Courses' className='mb-6'/>
            <CardGrid
                data={courses}
                renderItem={(course) => (
                    <CourseCardDashboard
                        key={course.id}
                        {...course}
                        progress={Math.floor(Math.random() * 100)} // Just an example
                        nextLesson="Lesson 5: Functions in JavaScript"
                        nextSession={{
                            date: new Date().toISOString(),
                            link: `/courses/${course.id}/session`,
                        }}
                    />
                )}
            />
        </div>
    )
}
