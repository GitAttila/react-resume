import {
  CertificateCardContent,
  CertificateFilterKeys,
} from '../models/certificate-card-content.model';
import { IoImagesOutline } from 'react-icons/io5';
import { LightboxKeys } from './lightbox/lightbox.map';
import UdemyLogoNew from '../assets/images/certificates/udemy-white-new.png';
import UdemyLogoOld from '../assets/images/certificates/udemy-white.png';
import PlaywrightCert from '../assets/images/certificates/2022_UC-Playwright-testing.jpeg';
import FigmaCert from '../assets/images/certificates/2021_UC-Figma.jpeg';
import JenkinsCert from '../assets/images/certificates/2022_UC-Jenkins.jpeg';
import D3Cert from '../assets/images/certificates/2021_UC-D3.jpeg';
import AngStylingCert from '../assets/images/certificates/2020_UC-AngularAnimations.jpg';
import StencilCert from '../assets/images/certificates/2022_UC-StencilJS.jpeg';
import Webpack5Cert from '../assets/images/certificates/2023_UC-Webpack5.jpeg';
import HTML5CanvasCert from '../assets/images/certificates/2023_UC-HTML5-canvas.jpeg';
import ReactiveAngCert from '../assets/images/certificates/2020_UC-ReactiveAngular.jpg';
import ElectronCert from '../assets/images/certificates/2020_UC-Electron.jpg';
import AngularTestingCert from '../assets/images/certificates/2020_UC-AngularTesting.jpg';
import AngularAnimationsCert from '../assets/images/certificates/2020_UC-AngularAnimations.jpg';
import NgrxCert from '../assets/images/certificates/2020_UC_NgRx.jpg';
import SketchCert from '../assets/images/certificates/2019_UC-UT3M9XU5_Sketch5.jpg';
import AdobeDimensionsCert from '../assets/images/certificates/2019_UC-QQFGUB51_AdobeDimension.jpg';
import AsyncJavascriptCert from '../assets/images/certificates/2019_UC-OJYS0XAZ_Async_JS.jpg';
import AngMaterialCert from '../assets/images/certificates/2019_UC-M13B5D2R_AngularMaterial.jpg';
import RxjsCert from '../assets/images/certificates/2019_UC-K24N1TK1_RXJS.jpg';
import NpmCert from '../assets/images/certificates/2019_UC-G41JMI67_npm.jpg';
import MeanStackCert from '../assets/images/certificates/2019_UC-AAXBGNAX_MEANstack.jpg';
import NodeCert from '../assets/images/certificates/2018_UC-TLKS2LBR_Node.jpg';

// must have double hyphens in LinkIcon id for later parsing
export const CERTIFICATE_CARDS: CertificateCardContent[] = [
  {
    logo: UdemyLogoNew,
    image: Webpack5Cert,
    title: 'Webpack 5 and Vite',
    subtitle: 'March 2023',
    keys: [CertificateFilterKeys.AUTOMATION],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_WEBPACK5}`,
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
    image: JenkinsCert,
    title: 'Jenkins',
    subtitle: 'December 2022',
    keys: [CertificateFilterKeys.AUTOMATION],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_JENKINS}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoNew,
    image: D3Cert,
    title: 'Mastering data visualization in D3',
    subtitle: 'August 2021',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_D3}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: FigmaCert,
    title: 'Figma - UI / UX',
    subtitle: 'June 2021',
    keys: [CertificateFilterKeys.DESIGN],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_FIGMA}`,
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
  {
    logo: UdemyLogoOld,
    image: ReactiveAngCert,
    title: 'Reactive Angular',
    subtitle: 'May 2020',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_REACTIVE_ANGULAR}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },

  {
    logo: UdemyLogoOld,
    image: ElectronCert,
    title: 'Electron: Desktop Apps',
    subtitle: 'February 2020',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_ELECTRON}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: AngularTestingCert,
    title: 'Angular Testing',
    subtitle: 'April 2020',
    keys: [CertificateFilterKeys.TESTING],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_ANGULAR_TESTING}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: AngularAnimationsCert,
    title: 'Angular animations',
    subtitle: 'May 2020',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_ANGULAR_ANIMATIONS}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: NgrxCert,
    title: 'NgRx - The complete guide',
    subtitle: 'April 2020',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_NGRX}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },

  {
    logo: UdemyLogoOld,
    image: SketchCert,
    title: 'Sketch',
    subtitle: 'July 2019',
    keys: [CertificateFilterKeys.DESIGN],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_SKETCH}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: AdobeDimensionsCert,
    title: 'Adobe Dimension',
    subtitle: 'July 2019',
    keys: [CertificateFilterKeys.DESIGN],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_ADOBE_DIMENSIONS}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: AsyncJavascriptCert,
    title: 'Asynchronous Javascript',
    subtitle: 'June 2019',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_ASYNC_JAVASCRIPT}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: AngMaterialCert,
    title: 'Angular Material',
    subtitle: 'November 2019',
    keys: [CertificateFilterKeys.DEVELOPMENT, CertificateFilterKeys.DESIGN],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_ANGULAR_MATERIAL}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: RxjsCert,
    title: 'Rxjs',
    subtitle: 'August 2019',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_RXJS}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: NpmCert,
    title: 'NPM',
    subtitle: 'May 2019',
    keys: [CertificateFilterKeys.AUTOMATION],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_NPM}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: MeanStackCert,
    title: 'Mean stack',
    subtitle: 'September 2019',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_MEAN_STACK}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
  {
    logo: UdemyLogoOld,
    image: NodeCert,
    title: 'Node.js',
    subtitle: 'October 2018',
    keys: [CertificateFilterKeys.DEVELOPMENT],
    linkIcon: {
      id: `id-cert-link--${LightboxKeys.CERT_NODE}`,
      caption: '',
      icon: IoImagesOutline,
    },
  },
];
