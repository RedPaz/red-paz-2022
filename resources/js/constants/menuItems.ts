import { HeaderItem } from './../interfaces/headerItem';

export const HEADER_ITEMS: HeaderItem[] = [
  {
    label: 'Inicio',
    src: '#',
    subItems: [],
  },
  {
    label: 'Sobre Nosotros',
    src: '#',
    subItems: [],
  },
  {
    label: 'Experiencias de Paz',
    src: '#',
    subItems: [
      { label: 'Iniciativas RedPaz Unal', src: '#' },
      { label: 'Proyectos de Docencia', src: '#' },
      { label: 'Proyectos de Investigación', src: '#' },
      { label: 'Proyectos de Extensión', src: '#' },
    ],
  },
  {
    label: 'Experiencias de Paz',
    src: '#',
    subItems: [
      { label: 'Sistema Integral para la Paz', src: '#' },
      { label: 'Entidades Gubernamentales', src: '#' },
      { label: 'Organismos Internacionales', src: '#' },
    ],
  },
  {
    label: 'Recursos',
    src: '#',
    subItems: [
      { label: 'Formación y cursos de extensión', src: '#' },
      { label: 'Publicaciones', src: '#' },
    ],
  },
  {
    label: 'Contacto',
    src: '#',
    subItems: [],
  },
  {
    label: 'Sedes',
    src: '#',
    subItems: [
      { label: 'Amazonía', src: 'https://www.imani.unal.edu.co/' },
      { label: 'Bogotá', src: 'https://bogota.unal.edu.co/' },
      { label: 'Caribe', src: 'https://caribe.unal.edu.co/' },
      { label: 'Manizales', src: 'https://www.manizales.unal.edu.co/' },
      { label: 'Medellín', src: 'https://medellin.unal.edu.co/' },
      { label: 'Caribe', src: 'https://caribe.unal.edu.co/' },
      { label: 'Orinoquía', src: 'https://orinoquia.unal.edu.co/' },
      { label: 'Palmira', src: 'https://www.palmira.unal.edu.co/' },
      { label: 'Tumaco', src: 'https://www.tumaco-pacifico.unal.edu.co/' },
    ],
  },
];
