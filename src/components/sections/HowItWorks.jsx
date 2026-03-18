import { PlayCircle, Users, CheckCircle2 } from 'lucide-react';
import { GradientText } from '../ui';

const steps = [
  { 
    icon: PlayCircle, 
    title: "1. Inicio (Lunes)", 
    desc: "Presentamos el proyecto de la semana, los requerimientos técnicos y el stack sugerido.",
    color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20"
  },
  { 
    icon: Users, 
    title: "2. Desarrollo (Mar - Vie)", 
    desc: "Trabajas en equipo o en solitario, compartiendo dudas y avances en Discord. Pair programming fomentado.",
    color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20"
  },
  { 
    icon: CheckCircle2, 
    title: "3. Cierre (Sábado)", 
    desc: "Demos en vivo. Muestras lo que construiste, recibes feedback de código y celebramos los logros.",
    color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20"
  }
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-slate-900/50 border-y border-slate-800 relative overflow-hidden">
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10" />
    
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">El Ciclo de <GradientText>Desarrollo</GradientText></h2>
        <p className="text-slate-400 text-lg">Una metodología probada para mantenerte constante y productivo.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 -translate-y-1/2 z-0" />
        
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center text-center">
            <div className={`w-20 h-20 rounded-2xl ${step.bg} ${step.border} border-2 flex items-center justify-center ${step.color} mb-6 shadow-xl backdrop-blur-md`}>
              <step.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-slate-400 text-sm max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
