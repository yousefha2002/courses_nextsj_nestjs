import InstructorCard from '@/components/instructor/InstructorCard'
import Container from '@/components/ui/Container'
import React from 'react'
import users from '@/utils/data/users'
import CardGrid from '@/components/ui/CardGrild'

export default function page() {
    return (
        <section className="py-12 bg-gray-50">
            <Container>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Meet Our Instructors
                </h2>
                <CardGrid
                    data={users}
                    renderItem={(instructor) => <InstructorCard key={instructor.id} {...instructor} />}
                />
            </Container>
        </section>
    )
}