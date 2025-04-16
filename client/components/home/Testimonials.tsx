import Container from "@/components/ui/Container";
import TestimonialCard from "./TestimonialCard";
import testimonials from '@/utils/data/testimonials'

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50">
        <Container>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
            What Our Students Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
            </div>
        </Container>
        </section>
    );
}