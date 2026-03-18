import { Terminal, Github, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: '#', icon: Github, label: 'GitHub' },
    { href: '#', icon: MessageSquare, label: 'Discord', color: 'hover:text-[#5865F2]' },
  ];

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800 text-center md:text-left">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-slate-500" />
          <span className="text-xl font-bold text-slate-300">DEVHUB</span>
        </div>
        <p className="text-slate-500 text-sm">
          © {currentYear} DEVHUB. Construido por y para desarrolladores.
        </p>
        <div className="flex gap-4 text-slate-500">
          {socialLinks.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              className={`hover:text-cyan-400 transition-colors ${link.color || ''}`}
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
