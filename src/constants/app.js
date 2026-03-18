export const APP_NAME = 'DEVHUB';
export const APP_TAGLINE = 'Learn by doing';

export const NAV_LINKS = [
  { href: '#about', label: 'Comunidad' },
  { href: '#how-it-works', label: 'Metodología' },
  { href: '#projects', label: 'Proyectos' },
];

export const HERO_BANNER = {
  badge: 'Inscripciones abiertas para esta semana',
  title: 'Construye proyectos reales, no solo cursos.',
  subtitle: 'Somos una comunidad enfocada en aprender desarrollando. Deja los tutoriales interminables y empieza a programar en equipo como en el mundo real.',
};

export const CODE_SNIPPET = {
  filename: 'devhub_init.js',
  code: `const devhub = {
  status: 'active',
  mission: 'Learn by doing',
  members: ['junior', 'student', 'self-taught'],
  startProject: async () => {
    await Team.build();
    await Code.commit();
    return 'Experience++';
  }
};

// Deja de mirar tutoriales.
devhub.startProject();`,
};

export const CTA_CONTENT = {
  title: 'Deja de consumir contenido,\nempieza a construir.',
  subtitle: 'El próximo proyecto comienza este Lunes. Asegura tu lugar en la comunidad y da el salto de nivel que tu carrera necesita.',
  buttonText: 'Unirme ahora (Gratis)',
};
