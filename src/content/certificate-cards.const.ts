import {
  CertificateCardContent,
  CertificateFilterKeys,
} from '../models/certificate-card-content.model';
import { IoImagesOutline } from 'react-icons/io5';
import { LightboxKeys } from './lightbox/lightbox.map';
import UdemyLogoNew from '../assets/images/certificates/udemy-white-new.png';
import UdemyLogoOld from '../assets/images/certificates/udemy-white.png';
import PlaywrightCert from '../assets/images/certificates/2022_UC-Playwright-testing.jpeg';
import StencilCert from '../assets/images/certificates/2022_UC-StencilJS.jpeg';
import HTML5CanvasCert from '../assets/images/certificates/2023_UC-HTML5-canvas.jpeg';
import AngStylingCert from '../assets/images/certificates/2020_UC-AngularAnimations.jpg';

export const CERTIFICATE_CARDS: CertificateCardContent[] = [
  {
    logo: UdemyLogoNew,
    image: PlaywrightCert,
    title: 'Automated software testing with Playwright',
    subtitle: 'October 2022',
    keys: [CertificateFilterKeys.TESTING],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_PlAYWRIGHT}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoNew,
    image: StencilCert,
    title: 'Stencil.js and web components',
    subtitle: 'November 2022',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_STENCIL}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoNew,
    image: HTML5CanvasCert,
    title: 'HTML5 Canvas',
    subtitle: 'January 2023',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_HTML5_CANVAS}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: AngStylingCert,
    title: 'Angular styling and animations',
    subtitle: 'May 2020',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_ANGULAR_STYLING}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
];
