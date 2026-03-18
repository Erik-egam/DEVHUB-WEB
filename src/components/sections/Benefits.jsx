import { CheckCircle2 } from 'lucide-react';
import { GradientText } from '../ui';

const benefits = [
  { title: "Experiencia Real", desc: "Afronta problemas técnicos reales, usa Git en equipo y haz despliegues a producción." },
  { title: "Portafolio en GitHub", desc: "Llena tu perfil de cuadros verdes y repositorios con proyectos complejos y documentados." },
  { title: "Trabajo en Equipo", desc: "Mejora tus soft skills comunicándote y colaborar con otros desarrolladores." },
  { title: "Preparación Laboral", desc: "Simulamos el entorno de una startup tecnológica para que estés listo para tu primer empleo." }
];

const Benefits = () => (
  <section className="py-24 bg-slate-950">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          ¿Qué <GradientText>obtienes</GradientText> al unirte?
        </h2>
        <p className="text-slate-400 text-lg mb-8">
          No solo escribimos código, construimos carreras. DEVHUB está diseñado para darte las herramientas que las empresas buscan.
        </p>
        
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-1 bg-cyan-500/10 p-2 rounded-lg h-fit text-cyan-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">{benefit.title}</h4>
                <p className="text-slate-400 text-sm">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl transform rotate-3 scale-105"></div>
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600" 
          alt="Desarrolladores collaborating" 
          className="relative rounded-3xl border border-slate-700 shadow-2xl object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Benefits;
