import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";

interface MeSectionProps {
  onBack: () => void;
}

const MeSection = ({ onBack }: MeSectionProps) => {
  const tags = [
    "Machine Learning", "Product Design", "Startups", "TypeScript", 
    "Python", "Creative Coding", "UI/UX", "Data Science"
  ];

  const interests = [
    "Photography", "Travel", "Coffee", "Music", "Gaming", "Books"
  ];

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-pastel-pink via-pastel-blue to-pastel-lilac opacity-40 blur-2xl"
                animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative glass-card p-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face"
                  alt="Kamila"
                  className="w-full max-w-[320px] h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h1 className="section-title mb-2">Kamila</h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  25 years old
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  São Paulo, Brazil
                </span>
              </div>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm a passionate AI Engineer and Product Designer with a love for creating 
                beautiful, intelligent products. My journey started in computer science, 
                but I quickly found my calling at the intersection of design and technology.
              </p>
              <p>
                When I'm not building the future of AI, you'll find me exploring new coffee 
                spots, capturing moments through my camera, or diving deep into the latest 
                tech trends. I believe in making technology more human and accessible.
              </p>
            </div>

            {/* Skills Tags */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Interests Tags */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    className="chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MeSection;
