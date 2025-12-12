import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface NavButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  delay?: number;
}

const NavButton = ({ icon: Icon, label, onClick, delay = 0 }: NavButtonProps) => {
  return (
    <motion.button
      className="nav-button group min-w-[100px]"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
        {label}
      </span>
    </motion.button>
  );
};

export default NavButton;
