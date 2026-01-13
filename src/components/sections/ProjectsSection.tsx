import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Rocket, Code, FileText, Users } from "lucide-react";

interface ProjectsSectionProps {
  onBack: () => void;
}

const projects = [
  {
    id: 1,
    title: "DevLinks",
    icon: Rocket,
    description: "Uma página moderna e funcional para reunir links importantes em um só lugar.",
    url: "https://github.com/mk4amila/SENAC-AL-AULAS-DEVLINKS.git",
    color: "from-pastel-pink to-pastel-lilac",
  },
  {
    id: 2,
    title: "Aulas de HTML",
    icon: Code,
    description: "Projetos práticos desenvolvidos para fixar conceitos essenciais de estrutura web.",
    url: "https://github.com/mk4amila/SENAC-AL-AULAS-HTML.git",
    color: "from-pastel-peach to-pastel-pink",
  },
  {
    id: 3,
    title: "Aulas de CSS",
    icon: Code,
    description: "Projetos práticos focados em estilização e design visual de páginas web.",
    url: "https://github.com/mk4amila/SENAC-AL-AULAS-CSS.git",
    color: "from-pastel-blue to-pastel-lilac",
  },
  {
    id: 4,
    title: "Aulas de JavaScript",
    icon: Code,
    description: "Projetos práticos para aprender interatividade e lógica de programação.",
    url: "https://github.com/mk4amila/SENAC-AL-AULAS-JAVASCRIPT.git",
    color: "from-pastel-yellow to-pastel-peach",
  },
  {
    id: 5,
    title: "CadClientes",
    icon: Users,
    description: "Sistema simples de cadastro de clientes, focado em lógica, manipulação de dados e organização do código.",
    url: "https://github.com/mk4amila/SENAC-AL-AULAS-CADCLIENTES.git",
    color: "from-pastel-green to-pastel-blue",
  },
];

const ProjectsSection = ({ onBack }: ProjectsSectionProps) => {
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

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title mb-4 flex items-center justify-center gap-3">
            <Rocket className="w-8 h-8 text-primary" />
            Minha Jornada como Programadora de Sistemas
          </h1>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="glass-card p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-foreground/80 leading-relaxed text-center">
            Durante minha formação como Programadora de Sistemas no <span className="text-primary font-semibold">SENAC</span>, 
            tive a oportunidade de aprender e colocar em prática os fundamentos do desenvolvimento web, 
            trabalhando com <span className="text-primary font-medium">HTML, CSS e JavaScript</span>. 
            Mais do que teoria, cada conhecimento foi aplicado na construção de projetos reais, 
            desenvolvidos do zero, fortalecendo minha lógica, criatividade e organização de código.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
            Projetos Desenvolvidos
          </h2>
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-5 flex items-center gap-4 group cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                  <project.icon className="w-6 h-6 text-foreground/80" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          className="glass-card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-foreground/80 leading-relaxed text-center">
            Todos esses projetos foram pensados, desenvolvidos e construídos durante o curso no SENAC, 
            unindo aprendizado técnico e prática constante. Cada linha de código representa um passo 
            na minha trajetória como desenvolvedora e reforça meu compromisso em continuar aprendendo 
            e evoluindo na área da tecnologia.
          </p>
          <p className="text-center mt-4 text-primary font-medium flex items-center justify-center gap-2">
            ✨ Estou sempre em busca de novos desafios e oportunidades para transformar ideias em soluções digitais.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
