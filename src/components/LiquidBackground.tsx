import { motion } from "framer-motion";

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="liquid-gradient absolute inset-0" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, hsl(340 80% 88%) 0%, transparent 70%)",
          left: "10%",
          top: "20%",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-35"
        style={{
          background: "radial-gradient(circle, hsl(210 80% 88%) 0%, transparent 70%)",
          right: "15%",
          top: "10%",
        }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(270 70% 88%) 0%, transparent 70%)",
          left: "50%",
          bottom: "10%",
        }}
        animate={{
          x: [0, 30, -50, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(150 60% 88%) 0%, transparent 70%)",
          left: "5%",
          bottom: "20%",
        }}
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(45 90% 88%) 0%, transparent 70%)",
          right: "10%",
          bottom: "30%",
        }}
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default LiquidBackground;
