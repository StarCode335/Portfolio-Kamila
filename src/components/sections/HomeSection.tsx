import { motion } from "framer-motion";
import { Search, User, FolderOpen, Wrench, PartyPopper, Mail } from "lucide-react";
import NavButton from "../NavButton";
import avatar from "@/assets/avatar.png";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  const navItems = [
    { icon: User, label: "Me", section: "me" },
    { icon: FolderOpen, label: "Projects", section: "projects" },
    { icon: Wrench, label: "Skills", section: "skills" },
    { icon: PartyPopper, label: "Fun", section: "fun" },
    { icon: Mail, label: "Contact", section: "contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
        {/* Avatar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-pastel-pink via-pastel-lilac to-pastel-blue opacity-50 blur-xl"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src={avatar}
              alt="Kamila Avatar"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-card border-4 border-glass/80"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 tracking-tight">
            Hey, I'm Kamila 👋
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gradient">
            AI Portfolio
          </p>
        </motion.div>

        {/* Search / Ask Field */}
        <motion.div
          className="w-full max-w-md mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-card p-1">
            <div className="flex items-center gap-3 px-5 py-4">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-base"
              />
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {navItems.map((item, index) => (
            <NavButton
              key={item.section}
              icon={item.icon}
              label={item.label}
              onClick={() => onNavigate(item.section)}
              delay={index + 5}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;
