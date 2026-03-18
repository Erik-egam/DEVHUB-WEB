import { Rocket, Github } from 'lucide-react';
import { GradientText, PrimaryButton } from '../ui';

const CTA = () => (
  <section id="join" className="py-32 bg-slate-900 border-t border-slate-800 relative">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
        Deja de consumir contenido,<br />
        <GradientText>empieza a construir.</GradientText>
      </h2>
      <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
        El próximo proyecto comienza este Lunes. Asegura tu lugar en la comunidad y da el salto de nivel que tu carrera necesita.
      </p>
      <PrimaryButton href="#" className="!text-lg !px-10 !py-5">
        <Rocket className="w-6 h-6 mr-3" />
        Unirme ahora (Gratis)
      </PrimaryButton>
      <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
        <Github className="w-4 h-4" /> Acceso inmediato a todos los repositorios
      </p>
    </div>
  </section>
);

export default CTA;
