import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Trail {
  id: number;
  x: number;
  y: number;
  color: string;
}

const colors = [
  "hsl(280, 100%, 70%)", // roxo
  "hsl(320, 100%, 70%)", // pink
  "hsl(200, 100%, 70%)", // azul
  "hsl(160, 100%, 60%)", // verde água
  "hsl(40, 100%, 70%)",  // amarelo
  "hsl(0, 100%, 70%)",   // vermelho
  "hsl(260, 100%, 75%)", // lavanda
];

export const MouseTrail = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [colorIndex, setColorIndex] = useState(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newTrail: Trail = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      color: colors[colorIndex % colors.length],
    };

    setTrails((prev) => [...prev.slice(-20), newTrail]);
    setColorIndex((prev) => prev + 1);
  }, [colorIndex]);

  useEffect(() => {
    let throttleTimer: ReturnType<typeof setTimeout> | null = null;
    
    const throttledMouseMove = (e: MouseEvent) => {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          handleMouseMove(e);
          throttleTimer = null;
        }, 30);
      }
    };

    window.addEventListener("mousemove", throttledMouseMove);
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setTrails((prev) => prev.slice(1));
    }, 100);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            initial={{ 
              scale: 1, 
              opacity: 0.8,
              x: trail.x - 10,
              y: trail.y - 10,
            }}
            animate={{ 
              scale: 0,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
            }}
            className="absolute rounded-full"
            style={{
              width: 20 - index * 0.5,
              height: 20 - index * 0.5,
              backgroundColor: trail.color,
              boxShadow: `0 0 20px ${trail.color}, 0 0 40px ${trail.color}`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
