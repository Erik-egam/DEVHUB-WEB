import { Braces, Layers, Laptop, MessageSquare } from 'lucide-react';
import { GradientText, Card } from '../ui';

const features = [
  { icon: Braces, title: "Proyectos Reales", desc: "Nada de 'Hola Mundo'. Construimos software que resuelve problemas verdaderos." },
  { icon: Layers, title: "Ciclos Semanales", desc: "Cada semana un nuevo desafío para mantener el ritmo y la motivación alta." },
  { icon: Laptop, title: "Retos Prácticos", desc: "Pon a prueba tus habilidades resolviendo bugs, optimizando código y creando features." },
  { icon: MessageSquare, title: "Charlas Técnicas", desc: "Aprende de desarrolladores con experiencia en sesiones en vivo y Q&A." }
];

const About = () => (
  <section id="about" className="py-24 bg-slate-950">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">El fin del <GradientText>"Tutorial Hell"</GradientText></h2>
        <p className="text-slate-400 text-lg">DEVHUB es un club diseñado exclusivamente para romper la barrera de la experiencia. Aquí nuestra única regla es <strong className="text-cyan-400 font-medium">aprender haciendo</strong>.</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default About;
