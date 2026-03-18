import { Server, Database, Terminal, Code2, ChevronRight } from 'lucide-react';
import { GradientText, Card } from '../ui';

const projects = [
  {
    icon: Server,
    title: "API RESTful con Autenticación",
    desc: "Construye un backend robusto con Node.js, Express, JWT y conexión a base de datos.",
    tags: ["Node.js", "Express", "JWT", "PostgreSQL"]
  },
  {
    icon: Database,
    title: "App de Finanzas Personales",
    desc: "Dashboard interactivo para control de gastos con gráficos dinámicos y estado global.",
    tags: ["React", "Tailwind", "Zustand", "Chart.js"]
  },
  {
    icon: Terminal,
    title: "Sistemas Dockerizados",
    desc: "Aprende a contenerizar aplicaciones fullstack, configurar volúmenes y redes con Docker Compose.",
    tags: ["Docker", "Linux", "DevOps", "Nginx"]
  },
  {
    icon: Code2,
    title: "Mini SaaS de Gestión",
    desc: "Aplicación multi-tenant con pasarela de pagos simulada y gestión de roles de usuario.",
    tags: ["Next.js", "Prisma", "Stripe", "TypeScript"]
  }
];

const Projects = () => (
  <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Proyectos que sí <GradientText>destacan</GradientText></h2>
          <p className="text-slate-400 text-lg">Ejemplos de los desafíos que construimos semana a semana. Proyectos que te darán orgullo mostrar en tu portafolio.</p>
        </div>
        <a href="#join" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
          Ver repositorio de proyectos <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                <project.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
