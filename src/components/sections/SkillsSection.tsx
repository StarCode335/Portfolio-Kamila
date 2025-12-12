import { motion } from "framer-motion";
import { ArrowLeft, Code, Brain, Palette, Wrench } from "lucide-react";

interface SkillsSectionProps {
  onBack: () => void;
}

const skillCategories = [
  {
    title: "Habilidades Técnicas",
    icon: Code,
    color: "from-pastel-blue to-pastel-lilac",
    skills: [
      "Python", "TypeScript", "React", "Node.js", 
      "Machine Learning", "TensorFlow", "PostgreSQL", "AWS"
    ],
  },
  {
    title: "Habilidades Comportamentais",
    icon: Brain,
    color: "from-pastel-pink to-pastel-peach",
    skills: [
      "Liderança", "Comunicação", "Resolução de Problemas", "Criatividade",
      "Trabalho em Equipe", "Adaptabilidade", "Gestão de Tempo", "Pensamento Crítico"
    ],
  },
  {
    title: "Design",
    icon: Palette,
    color: "from-pastel-lilac to-pastel-pink",
    skills: [
      "Figma", "UI/UX Design", "Prototipagem", "Design Systems",
      "Pesquisa de Usuário", "Wireframing", "Design Visual", "Acessibilidade"
    ],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    color: "from-pastel-green to-pastel-blue",
    skills: [
      "Git", "Docker", "VS Code", "Notion",
      "Linear", "Vercel", "Supabase", "Cursor"
    ],
  },
];

const SkillsSection = ({ onBack }: SkillsSectionProps) => {
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
          <span className="font-medium">Voltar</span>
        </motion.button>

        <motion.h1
          className="section-title mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Habilidades & Especialidades
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card-hover p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-foreground/80" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.03,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
