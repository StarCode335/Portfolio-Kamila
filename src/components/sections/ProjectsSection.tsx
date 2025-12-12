import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface ProjectsSectionProps {
  onBack: () => void;
}

const projects = [
  {
    id: 1,
    title: "NeuraTalk AI",
    category: "Startup Project",
    description: "An AI-powered communication platform that enables natural conversations with intelligent assistants. Built with GPT-4 and a custom voice synthesis engine.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["AI/ML", "React", "Python"],
    color: "from-pastel-pink to-pastel-lilac",
  },
  {
    id: 2,
    title: "EcoTracker",
    category: "Hackathon Winner",
    description: "Award-winning sustainability app that gamifies carbon footprint tracking. Won 1st place at Climate Tech Hackathon 2024.",
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=600&h=400&fit=crop",
    tags: ["React Native", "Node.js", "MongoDB"],
    color: "from-pastel-green to-pastel-blue",
  },
  {
    id: 3,
    title: "PixelForge Studio",
    category: "Creative Tool",
    description: "A generative art platform that combines AI with traditional design tools to create unique digital artwork and NFTs.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    tags: ["Canvas API", "Stable Diffusion", "Web3"],
    color: "from-pastel-lilac to-pastel-yellow",
  },
  {
    id: 4,
    title: "MindFlow",
    category: "Productivity App",
    description: "A mindfulness and productivity app that uses AI to create personalized focus sessions and meditation experiences.",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&h=400&fit=crop",
    tags: ["Flutter", "Firebase", "TensorFlow"],
    color: "from-pastel-blue to-pastel-green",
  },
];

const ProjectsSection = ({ onBack }: ProjectsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </motion.button>

        <motion.h1
          className="section-title mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h1>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Project Card */}
          <div className="overflow-hidden px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass-card p-6 md:p-8"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${projects[currentIndex].color} opacity-20`} />
                    <img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      {projects[currentIndex].category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {projects[currentIndex].title}
                    </h2>
                    <p className="text-foreground/70 leading-relaxed">
                      {projects[currentIndex].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentIndex].tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium mt-4"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
