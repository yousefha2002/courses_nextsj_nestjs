import FilterCourse from '@/components/course/FilterCourse'
import CourseCard from '@/components/home/CourseCard'
import CardGrid from '@/components/ui/CardGrild'
import Container from '@/components/ui/Container'
import courses from '@/utils/data/courses'
import React from 'react'

export default function page() {
    return (
        <Container className='py-10'>
            <FilterCourse/>
            <CardGrid
                data={courses}
                renderItem={(course) => <CourseCard key={course.id} {...course} />}
            />
        </Container>
    )
}