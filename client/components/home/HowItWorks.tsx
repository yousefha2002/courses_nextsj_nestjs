import Container from "@/components/ui/Container";
import Step from "./Step";
import steps from '@/utils/data/steps'

    export default function HowItWorks() {
    return (
        <section className="py-20 bg-gray-50">
        <Container>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
            How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
                <Step key={index} {...step} />
            ))}
            </div>
        </Container>
        </section>
    );
}