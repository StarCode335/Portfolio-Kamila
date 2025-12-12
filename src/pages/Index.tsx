import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LiquidBackground from "@/components/LiquidBackground";
import PageTransition from "@/components/PageTransition";
import HomeSection from "@/components/sections/HomeSection";
import MeSection from "@/components/sections/MeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FunSection from "@/components/sections/FunSection";
import ContactSection from "@/components/sections/ContactSection";

type Section = "home" | "me" | "projects" | "skills" | "fun" | "contact";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>("home");

  const navigateTo = (section: string) => {
    setCurrentSection(section as Section);
  };

  const goHome = () => {
    setCurrentSection("home");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LiquidBackground />
      
      <AnimatePresence mode="wait">
        {currentSection === "home" && (
          <PageTransition key="home" isVisible={true}>
            <HomeSection onNavigate={navigateTo} />
          </PageTransition>
        )}

        {currentSection === "me" && (
          <PageTransition key="me" isVisible={true}>
            <MeSection onBack={goHome} />
          </PageTransition>
        )}

        {currentSection === "projects" && (
          <PageTransition key="projects" isVisible={true}>
            <ProjectsSection onBack={goHome} />
          </PageTransition>
        )}

        {currentSection === "skills" && (
          <PageTransition key="skills" isVisible={true}>
            <SkillsSection onBack={goHome} />
          </PageTransition>
        )}

        {currentSection === "fun" && (
          <PageTransition key="fun" isVisible={true}>
            <FunSection onBack={goHome} />
          </PageTransition>
        )}

        {currentSection === "contact" && (
          <PageTransition key="contact" isVisible={true}>
            <ContactSection onBack={goHome} />
          </PageTransition>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
