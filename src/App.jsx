import { Navbar, Hero, About, HowItWorks, Benefits, Projects, Community, CTA, Footer } from './components/sections';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Benefits />
        <Projects />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
