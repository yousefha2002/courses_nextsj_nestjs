import Link from "next/link";
import Container from "../ui/Container";
import Image from "next/image";

export default function Hero() {
return (
    <section className="bg-bg-light text-text-dark py-24">
        <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Text */}
            <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Welcome to <span className="text-primary">Course Hub</span>
                </h1>

                <p className="text-lg text-gray-600">
                    Discover a wide range of courses — from recorded lessons to live sessions — taught by experienced instructors.
                </p>

                <Link
                    href="/courses"
                    className="inline-block bg-primary hover:bg-primary-dark text-white text-lg font-semibold px-6 py-3 rounded transition duration-300"
                >
                    Browse Courses
                </Link>
            </div>
            
            {/* Image */}
            <div className="relative w-full h-[400px]">
                <Image src="/images/hero.png" alt="Hero Image" fill />
            </div>
        </Container>
        </section>
    );
}