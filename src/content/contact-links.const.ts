import { FaBlogger, FaMobileAlt } from 'react-icons/fa';
import { IoGlobe, IoLogoLinkedin } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from '../models/link.model';

export const SOCIAL_LINKS_LIST: Link[] = [
  {
    id: 'contact-web',
    icon: IoGlobe,
    caption: '',
    link: 'https://www.ahastudio.cz/',
  },
  {
    id: 'contact-linkedin',
    icon: IoLogoLinkedin,
    caption: '',
    link: 'https://www.linkedin.com/in/attila-h-22309a154/',
  },
  {
    id: 'contact-github',
    icon: IoLogoGithub,
    caption: '',
    link: 'https://github.com/GitAttila',
  },
];

export const CONTACT_LIST: Link[] = [
  {
    id: 'contact-mobile',
    icon: FaMobileAlt,
    caption: '+(420) - 608 975 292',
    link: '',
  },
  {
    id: 'contact-email',
    icon: MdOutlineEmail,
    caption: 'attila.hazay@attilahazay.com',
    link: '',
  },
  {
    id: 'contact-linkedin',
    icon: IoLogoLinkedin,
    caption: 'LinkedIn',
    link: 'https://www.linkedin.com/in/attila-h-22309a154/',
  },
  {
    id: 'contact-github',
    icon: IoLogoGithub,
    caption: 'Github',
    link: 'https://github.com/GitAttila',
  },
  {
    id: 'contact-blogpost-1',
    icon: FaBlogger,
    caption: 'attilahazay.blogspot.com',
    link: 'https://attilahazay.blogspot.com/',
  },
  {
    id: 'contact-blogpost-2',
    icon: FaBlogger,
    caption: 'lourdes2fatima.blogspot.com',
    link: 'https://lourdes2fatima.blogspot.com/',
  },
];
