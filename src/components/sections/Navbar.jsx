import { Terminal } from 'lucide-react';
import { useScrollPosition } from '../../hooks';
import { PrimaryButton } from '../ui';

const Navbar = () => {
  const isScrolled = useScrollPosition(20);

  const navLinks = [
    { href: '#about', label: 'Comunidad' },
    { href: '#how-it-works', label: 'Metodología' },
    { href: '#projects', label: 'Proyectos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-black tracking-tighter text-white">
            DEV<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">HUB</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-cyan-400 transition-colors">
              {link.label}
            </a>
          ))}
          <PrimaryButton href="#join" className="!px-6 !py-2.5 !text-sm">Únete al Discord</PrimaryButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
