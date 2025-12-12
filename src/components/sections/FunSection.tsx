import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Coffee, Gamepad2, Music, Heart } from "lucide-react";

interface FunSectionProps {
  onBack: () => void;
}

const funFacts = [
  { emoji: "☕", fact: "I've tried 127 different coffee shops in São Paulo" },
  { emoji: "🎮", fact: "My all-time favorite game is The Legend of Zelda" },
  { emoji: "📚", fact: "I read about 30 books per year" },
  { emoji: "🌍", fact: "I've traveled to 15 countries" },
  { emoji: "🎵", fact: "My coding playlist has over 500 songs" },
  { emoji: "🌙", fact: "I'm definitely a night owl" },
];

const questions = [
  { q: "Tabs or Spaces?", a: "Spaces, always! 2 spaces specifically 😌" },
  { q: "Coffee or Tea?", a: "Coffee, no doubt. Strong espresso!" },
  { q: "Light or Dark mode?", a: "Dark mode for life 🌙" },
  { q: "Mac or PC?", a: "MacBook for development, PC for gaming" },
];

const FunSection = ({ onBack }: FunSectionProps) => {
  const [clickedFact, setClickedFact] = useState<number | null>(null);
  const [revealedQuestions, setRevealedQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setRevealedQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
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

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title mb-2 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            Fun Zone
            <Sparkles className="w-8 h-8 text-primary" />
          </h1>
          <p className="text-muted-foreground">
            A little corner of randomness and fun facts about me!
          </p>
        </motion.div>

        {/* Fun Facts Grid */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Random Facts About Me
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {funFacts.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card-hover p-5 cursor-pointer text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                onClick={() => setClickedFact(clickedFact === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="text-4xl block mb-3"
                  animate={{
                    scale: clickedFact === index ? [1, 1.3, 1] : 1,
                    rotate: clickedFact === index ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {item.emoji}
                </motion.span>
                <p className="text-foreground/80 text-sm">{item.fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Questions */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-primary" />
            Quick Questions (Click to reveal!)
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card-hover p-5 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                onClick={() => toggleQuestion(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="font-medium text-foreground mb-2">{item.q}</p>
                <motion.div
                  initial={false}
                  animate={{
                    height: revealedQuestions.includes(index) ? "auto" : 0,
                    opacity: revealedQuestions.includes(index) ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-primary text-sm pt-2 border-t border-border">
                    {item.a}
                  </p>
                </motion.div>
                {!revealedQuestions.includes(index) && (
                  <p className="text-muted-foreground text-xs mt-2">
                    Tap to see my answer...
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Vibe */}
        <motion.div
          className="glass-card p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Coffee className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Current Status</span>
            <Music className="w-5 h-5 text-primary" />
          </div>
          <p className="text-muted-foreground text-sm">
            🎧 Listening to Lo-Fi beats while coding
          </p>
          <p className="text-muted-foreground text-sm">
            ☕ On my 3rd coffee of the day
          </p>
          <p className="text-muted-foreground text-sm">
            💻 Building something cool with AI
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FunSection;
