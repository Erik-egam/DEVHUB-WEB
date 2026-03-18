import { MessageSquare, ChevronRight } from 'lucide-react';
import { GradientText, PrimaryButton } from '../ui';

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
    
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 z-10 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-cyan-400 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Inscripciones abiertas para esta semana
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
          Construye <GradientText>proyectos reales</GradientText>, no solo cursos.
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Somos una comunidad enfocada en <strong className="text-slate-200">aprender desarrollando</strong>. 
          Deja los tutoriales interminables y empieza a programar en equipo como en el mundo real.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
          <PrimaryButton href="#join" className="w-full sm:w-auto group">
            <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Únete a DEVHUB
          </PrimaryButton>
          <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-300 transition-colors hover:text-white group">
            Ver cómo funciona 
            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-lg lg:max-w-none transform lg:rotate-2 hover:rotate-0 transition-all duration-500">
        <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-slate-800 shadow-2xl shadow-cyan-500/10">
          <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto text-xs text-slate-500 font-mono">devhub_init.js</div>
          </div>
          <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
            <div className="text-purple-400">const <span className="text-blue-400">devhub</span> <span className="text-white">=</span> <span className="text-yellow-300">{`{`}</span></div>
            <div className="pl-4 text-slate-300">status: <span className="text-green-400">'active'</span>,</div>
            <div className="pl-4 text-slate-300">mission: <span className="text-green-400">'Learn by doing'</span>,</div>
            <div className="pl-4 text-purple-400">members: <span className="text-yellow-300">[</span><span className="text-green-400">'junior'</span>, <span className="text-green-400">'student'</span>, <span className="text-green-400">'self-taught'</span><span className="text-yellow-300">]</span>,</div>
            <div className="pl-4 text-blue-400">startProject<span className="text-white">:</span> <span className="text-purple-400">async</span> <span className="text-yellow-300">()</span> <span className="text-purple-400">{`=>`}</span> <span className="text-blue-300">{`{`}</span></div>
            <div className="pl-8 text-slate-300"><span className="text-purple-400">await</span> <span className="text-blue-200">Team</span>.<span className="text-blue-400">build</span>();</div>
            <div className="pl-8 text-slate-300"><span className="text-purple-400">await</span> <span className="text-blue-200">Code</span>.<span className="text-blue-400">commit</span>();</div>
            <div className="pl-8 text-slate-300"><span className="text-purple-400">return</span> <span className="text-green-400">'Experience++'</span>;</div>
            <div className="pl-4 text-blue-300">{`}`}</div>
            <div className="text-yellow-300">{`}`}<span className="text-white">;</span></div>
            <br />
            <div className="text-slate-500">{'// Deja de mirar tutoriales.'}</div>
            <div className="text-white"><span className="text-blue-400">devhub</span>.<span className="text-blue-200">startProject</span>(); <span className="animate-pulse text-cyan-400">_</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
