import {
  CardContentType,
  PortfolioCardContent,
} from '../models/feature-portfolio-content.model';
import { ProjectFilterKeys } from './projects-buttonsGroup';
import { IoOpenOutline, IoImagesOutline } from 'react-icons/io5';
import { LightboxKeys } from './lightbox/lightbox.map';
import ACLogo from '../assets/images/projects/ac-logo-white.png';
import ACImage from '../assets/images/projects/astro-charting/AH_astro-charting_01.jpg';
import MedtronicLogo from '../assets/images/projects/Medtronic_logo_white.png';
import CSyncImage from '../assets/images/projects/MDT_csync/AH_project_MDT_sync_01.png';
import HolterImage from '../assets/images/projects/MDT_holter/AH_project_holter_01.png';
import KBLogo from '../assets/images/projects/KB_logo.png';
import KBImage from '../assets/images/projects/KB/AH_project_KB_investmentportal_01.png';
import RALogo from '../assets/images/projects/RA_logo_bug_white.svg';
import RALoginImage from '../assets/images/projects/RA_loginpage/AH_project_RA_loginpage_01.png';
import RACalendarImage from '../assets/images/projects/RA_calendar/AH_project_RA_calendar_01.jpg';
import RAmerchendiseImage from '../assets/images/projects/RA_merchendise/AH_project_RA_merchendise_01.jpg';
import KamenictviIElogo from '../assets/images/projects/IE_logo_white.png';
import KamenictviIEImage from '../assets/images/projects/kamenictvi_IE/AH_project_IE_01.jpg';
import PunjabiLogo from '../assets/images/projects/PF_logo_frame_white.png';
import PunjabiImage from '../assets/images/projects/punjabifood/AH_project_pf_01.jpg';
import SparsLogo from '../assets/images/projects/spars_logo_white.png';
import SparsImage from '../assets/images/projects/spars/AH_project_spars_01.jpg';
import AHstudioLogo from '../assets/images/projects/AHASTUDIO_logo_inv_white.png';
import AHstudioImage from '../assets/images/projects/interior-design/beforeafter01.png';
import CerticonLogo from '../assets/images/projects/certicon-logo-white.png';
import ConcepticonImage from '../assets/images/projects/CC_Concepticon/AH_project_Certicon_ERP_01.png';
import Dilli6Logo from '../assets/images/projects/d6_logo_white.png';
import Dilli6DesignImage from '../assets/images/projects/dilli6/AH_project_dilli6_01.jpg';
import Dilli6WebImage from '../assets/images/projects/dilli6/AH_project_dilli6_web_01.png';
import KELogo from '../assets/images/projects/KrisErb_logo_white.png';
import KEImage from '../assets/images/projects/KE/AH_project_KE_01.jpg';
import FTCLogo from '../assets/images/projects/ftc_short_white.png';
import FTCManage from '../assets/images/projects/FTC_Manage/AH_project_FTC_manage_01.png';
import FTCWebSite from '../assets/images/projects/FTC_site/AH_project_FTC_site_01.jpg';
import EmbLogo from '../assets/images/projects/embitron-logo-white.png';
import EmbImage from '../assets/images/projects/embitron/embitron1.png';

// must have double hyphens in LinkIcon id for later parsing
export const PROJECT_CARDS: PortfolioCardContent<ProjectFilterKeys>[] = [
  {
    type: CardContentType.PROJECT,
    logo: EmbLogo,
    image: EmbImage,
    title: "Embitron's CRM system",
    keys: [ProjectFilterKeys.ANGULAR_DEVELOPMENT, ProjectFilterKeys.UX_DESIGN],
    linkIcon: null,
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_EMB}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
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
    logo: MedtronicLogo,
    image: HolterImage,
    title: "Medtronic's Holter application",
    keys: [ProjectFilterKeys.ANGULAR_DEVELOPMENT, ProjectFilterKeys.UX_DESIGN],
    linkIcon: null,
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_MDT_HOLTER}`,
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
  {
    type: CardContentType.PROJECT,
    logo: RALogo,
    image: RALoginImage,
    title: "Rockwell Automation's login page",
    keys: [ProjectFilterKeys.ANGULAR_DEVELOPMENT, ProjectFilterKeys.UX_DESIGN],
    linkIcon: {
      id: 'id-project-link--ra-login-page',
      caption: '',
      link: 'https://xd.adobe.com/view/6ee9d2db-0e94-4540-6e08-17570f56db6e-18d8/?fullscreen',
      icon: IoOpenOutline,
    },
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_RA_LOGIN_PAGE}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: KamenictviIElogo,
    image: KamenictviIEImage,
    title: 'Kamenictví Ivan Erben',
    keys: [ProjectFilterKeys.WEB_DEVELOPMENT],
    linkIcon: {
      id: 'id-project-link--kamenictvi-ie',
      caption: '',
      link: 'http://kamenictvi-erben.cz/',
      icon: IoOpenOutline,
    },
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_KAMENICTVI_IE}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: PunjabiLogo,
    image: PunjabiImage,
    title: 'Punjabi Food',
    keys: [ProjectFilterKeys.GRAPHICS_DESIGN],
    linkIcon: null,
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_PUNJABI_FOOD}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: SparsLogo,
    image: SparsImage,
    title: 'Spars Naturals',
    keys: [ProjectFilterKeys.GRAPHICS_DESIGN],
    linkIcon: null,
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_SPARS}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: AHstudioLogo,
    image: AHstudioImage,
    title: 'Interior design',
    keys: [ProjectFilterKeys.UX_DESIGN],
    linkIcon: null,
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_INTERIOR_DESIGN}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: CerticonLogo,
    image: ConcepticonImage,
    title: "Certicon's ERP system",
    keys: [ProjectFilterKeys.UX_DESIGN, ProjectFilterKeys.ANGULAR_DEVELOPMENT],
    linkIcon: {
      id: 'id-project-link--concepticon',
      caption: '',
      link: 'https://xd.adobe.com/view/79aa14d0-27db-4752-8aec-1e34218d6dee-2cf9/screen/d1e0d961-31ed-4e24-9859-fc4def944fb7/',
      icon: IoOpenOutline,
    },
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_CONCEPTICON}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: Dilli6Logo,
    image: Dilli6DesignImage,
    title: "Dilli6 Indian restaurant's design system",
    keys: [ProjectFilterKeys.GRAPHICS_DESIGN, ProjectFilterKeys.UX_DESIGN],
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_DILLI6_DESIGN}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: Dilli6Logo,
    image: Dilli6WebImage,
    title: 'Dilli6 web',
    keys: [ProjectFilterKeys.WEB_DEVELOPMENT],
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_DILLI6_WEB}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: KELogo,
    image: KEImage,
    title: 'Kristýna Erbenová',
    keys: [ProjectFilterKeys.WEB_DEVELOPMENT],
    linkIcon: {
      id: 'id-project-link--ke-web',
      caption: '',
      link: 'http://www.kristynaerbenova.com',
      icon: IoOpenOutline,
    },
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_KE_WEB}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: FTCLogo,
    image: FTCManage,
    title: 'FactoryTalk Manage workflow',
    keys: [ProjectFilterKeys.UX_DESIGN],
    linkIcon: {
      id: 'id-project-link--ftc-manage',
      caption: '',
      link: 'https://xd.adobe.com/view/c58528b7-ecff-4252-55a6-0f4ae7cefdba-b3b4/',
      icon: IoOpenOutline,
    },
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_FTC_MANAGE}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: FTCLogo,
    image: FTCWebSite,
    title: 'FactoryTalk web site',
    keys: [ProjectFilterKeys.WEB_DEVELOPMENT],
    linkIcon: {
      id: 'id-project-link--ftc-web-site',
      caption: '',
      link: 'https://resume.attilahazay.com/FTC/ftc-main-site/index.html',
      icon: IoOpenOutline,
    },
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_FTC_SITE}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: RALogo,
    image: RACalendarImage,
    title: "Rockwell Automation's calendar 2019",
    keys: [ProjectFilterKeys.GRAPHICS_DESIGN],
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_RA_CALENDAR}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    type: CardContentType.PROJECT,
    logo: RALogo,
    image: RAmerchendiseImage,
    title: "Rockwell Automation's merchendise",
    keys: [ProjectFilterKeys.GRAPHICS_DESIGN],
    galleryIcon: {
      id: `id-project-gallery-icon--${LightboxKeys.PROJECT_RA_MERCHENDISE}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
];
