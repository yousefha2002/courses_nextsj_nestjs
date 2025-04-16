import CTA from "@/components/home/CTA";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";

export default function page() {
    return (
        <section>
            <HeroSection/>
            <FeaturedCourses/>
            <HowItWorks/>
            <Testimonials/>
            <CTA/>
        </section>
    );
}