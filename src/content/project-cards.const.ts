import {
  CardContentType,
  PortfolioCardContent,
} from '../models/feature-portfolio-content.model';
import { ProjectFilterKeys } from './projects-buttonsGroup';
import { IoOpenOutline, IoImagesOutline } from 'react-icons/io5';
import ACLogo from '../assets/images/projects/ac-logo-white.png';
import ACImage from '../assets/images/projects/astro-charting/AH_astro-charting_01.jpg';
import MedtronicLogo from '../assets/images/projects/Medtronic_logo_white.png';
import CSyncImage from '../assets/images/projects/MDT_csync/AH_project_MDT_sync_01.png';
import KBLogo from '../assets/images/projects/KB_logo.png';
import KBImage from '../assets/images/projects/KB/AH_project_KB_investmentportal_01.png';
import { LightboxKeys } from './lightbox/lightbox.map';

// must have double hyphens in LinkIcon id for later parsing
export const PROJECT_CARDS: PortfolioCardContent<ProjectFilterKeys>[] = [
  {
    type: CardContentType.PROJECT,
    logo: ACLogo,
    image: ACImage,
    title: 'Astro-charting.com',
    keys: [ProjectFilterKeys.ANGULAR_DEVELOPMENT, ProjectFilterKeys.UX_DESIGN],
    linkIcon: {
      id: 'id-project-link--astro-charting',
      caption: '',
      link: 'https://astro-charting.com/#/chart-browsing',
      icon: IoOpenOutline,
    },
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_ASTRO_CHARTING}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: MedtronicLogo,
    image: CSyncImage,
    title: "Medtronic's C-sync application",
    keys: [ProjectFilterKeys.ANGULAR_DEVELOPMENT, ProjectFilterKeys.UX_DESIGN],
    linkIcon: null,
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_MDT_CSYNC}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: KBLogo,
    image: KBImage,
    title: 'Investment portal by Komerční banka',
    keys: [ProjectFilterKeys.ANGULAR_DEVELOPMENT],
    linkIcon: null,
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_KB}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
];
