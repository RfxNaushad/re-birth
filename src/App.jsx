// import { useEffect } from "react";
import BookACall from "./components/BookACall";
import ExpertiseSection from "./components/ExpertiseSection";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LenisWrapper from "./components/LenisWrapper";
import MetricsSection from "./components/MetricsSection";
import ProjectsList from "./components/ProjectList";
import TextSection from "./components/TextSection";



function App() {
    return (
        <LenisWrapper>
            <>
                <HeroSection />
                <div className="main z-20 bg-white">
                    <TextSection />
                    <FeaturedProject />
                    <ProjectsList />
                    <ExpertiseSection />
                    <MetricsSection />
                    <BookACall />
                </div>
                <div>
                    <Footer />
                </div>
            </>
        </LenisWrapper>
    );
}

export default App;
