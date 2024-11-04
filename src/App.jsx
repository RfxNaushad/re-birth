import { useEffect } from "react";
import BookACall from "./components/BookACall";
import ExpertiseSection from "./components/ExpertiseSection";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MetricsSection from "./components/MetricsSection";
// import ProfileSection from "./components/ProfileSection"
import ProjectsList from "./components/ProjectList";
// import TestimonialSlider from "./components/TestimonialSlider";
import TextSection from "./components/TextSection";
import gsap from "gsap";
// import LenisWrapper from "./components/LenisWraper";


function App() {
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.main',
                start: 'top -30%',
                end: 'bottom 30%',
                scrub: true,
            }
        }).fromTo('.main', { y: '0%' }, { y: '-15%', })
    }, [])
    return (
        <div>
            <HeroSection />
            <div className="main z-20 bg-white">
                <TextSection />
                {/* <ProfileSection /> */}
                <FeaturedProject />
                <ProjectsList />
                <ExpertiseSection />
                <MetricsSection />
                {/* <TestimonialSlider /> */}
                <BookACall />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
