import { MessageSquare } from 'lucide-react';
import { PrimaryButton } from '../ui';

const Community = () => (
  <section className="py-24 bg-slate-950 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5865F2]/5 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-20 h-20 bg-[#5865F2] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#5865F2]/30 transform -rotate-6 hover:rotate-0 transition-transform">
            <MessageSquare className="w-10 h-10 text-white fill-current" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            El corazón de DEVHUB está en <span className="text-[#5865F2]">Discord</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            No estás solo. Únete a canales de ayuda, participa en pair programming por voz, comparte tus recursos favoritos y haz networking con otros apasionados por el código.
          </p>
          <PrimaryButton href="#join" variant="discord">
            Unirme a la comunidad
          </PrimaryButton>
        </div>
      </div>
    </div>
  </section>
);

export default Community;
