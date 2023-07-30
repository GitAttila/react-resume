import { Link } from '../models/link.model';
import { IoLogoHtml5, IoLogoReact } from 'react-icons/io5';
import { SiVite, SiSass, SiTypescript } from 'react-icons/si';

export const TECH_LINKS_LIST: Link[] = [
  {
    id: 'html-logo',
    icon: IoLogoHtml5,
    caption: 'HTML5',
    link: 'https://github.com/whatwg/html',
  },
  {
    id: 'scss-logo',
    icon: SiSass,
    caption: 'SCSS',
    link: 'https://sass-lang.com/',
  },
  {
    id: 'react-logo',
    icon: IoLogoReact,
    caption: 'React',
    link: 'https://react.dev/',
  },
  {
    id: 'typescript-logo',
    icon: SiTypescript,
    caption: 'Typescript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    id: 'vite-logo',
    icon: SiVite,
    caption: 'Vite',
    link: 'https://vitejs.dev/',
  },
];
