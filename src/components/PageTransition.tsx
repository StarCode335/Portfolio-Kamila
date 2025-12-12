import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  isVisible: boolean;
}

const PageTransition = ({ children, isVisible }: PageTransitionProps) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
