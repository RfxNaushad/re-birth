import ExpertiseSection from "./components/ExpertiseSection";
import FeaturedProject from "./components/FeaturedProject";
import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsList from "./components/ProjectList";
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

        </div>
    );
}

export default App;
