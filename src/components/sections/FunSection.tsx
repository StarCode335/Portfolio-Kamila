import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Coffee, Gamepad2, Music, Heart } from "lucide-react";

interface FunSectionProps {
  onBack: () => void;
}

const funFacts = [
  { emoji: "☕", fact: "Já experimentei 127 cafeterias diferentes em São Paulo" },
  { emoji: "🎮", fact: "Meu jogo favorito de todos os tempos é The Legend of Zelda" },
  { emoji: "📚", fact: "Leio cerca de 30 livros por ano" },
  { emoji: "🌍", fact: "Já viajei para 15 países" },
  { emoji: "🎵", fact: "Minha playlist de programação tem mais de 500 músicas" },
  { emoji: "🌙", fact: "Sou definitivamente uma coruja noturna" },
];

const questions = [
  { q: "Tabs ou Espaços?", a: "Espaços, sempre! 2 espaços especificamente 😌" },
  { q: "Café ou Chá?", a: "Café, sem dúvida. Espresso forte!" },
  { q: "Light ou Dark mode?", a: "Dark mode para sempre 🌙" },
  { q: "Mac ou PC?", a: "MacBook para desenvolvimento, PC para jogos" },
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
          <span className="font-medium">Voltar</span>
        </motion.button>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title mb-2 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            Zona de Diversão
            <Sparkles className="w-8 h-8 text-primary" />
          </h1>
          <p className="text-muted-foreground">
            Um cantinho de curiosidades e fatos divertidos sobre mim!
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
            Curiosidades Sobre Mim
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
            Perguntas Rápidas (Clique para revelar!)
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
                    Toque para ver minha resposta...
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
            <span className="font-medium text-foreground">Status Atual</span>
            <Music className="w-5 h-5 text-primary" />
          </div>
          <p className="text-muted-foreground text-sm">
            🎧 Ouvindo Lo-Fi beats enquanto programo
          </p>
          <p className="text-muted-foreground text-sm">
            ☕ No meu 3º café do dia
          </p>
          <p className="text-muted-foreground text-sm">
            💻 Construindo algo legal com IA
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FunSection;
