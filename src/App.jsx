import BookACall from "./components/BookACall";
import ExpertiseSection from "./components/ExpertiseSection";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MetricsSection from "./components/MetricsSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsList from "./components/ProjectList";
// import TestimonialSlider from "./components/TestimonialSlider";
import TextSection from "./components/TextSection";
// import LenisWrapper from "./components/LenisWraper";


function App() {
    return (
        <div>
            <HeroSection />
            <TextSection />
            <ProfileSection />
            <FeaturedProject />
            <ProjectsList />
            <ExpertiseSection />
            <MetricsSection />
            {/* <TestimonialSlider /> */}
            <BookACall />
            <Footer />
        </div>
    );
}

export default App;
