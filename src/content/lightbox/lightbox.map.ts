import { SlideImage } from 'yet-another-react-lightbox';
import { SLIDES_AWARDS_BW } from './awards-lightbox-const';
import { SLIDES_AWARDS_PHOTOSHOOT } from './awards-lightbox-photoshoot.const';
import {
  SLIDES_CERT_ADOBE_DIMENSIONS,
  SLIDES_CERT_ANGULAR_ANIMATIONS,
  SLIDES_CERT_ANGULAR_MATERIAL,
  SLIDES_CERT_ANGULAR_STYLING,
  SLIDES_CERT_ANGULAR_TESTING,
  SLIDES_CERT_ASYNC_JAVASCRIPT,
  SLIDES_CERT_D3,
  SLIDES_CERT_ELECTRON,
  SLIDES_CERT_FIGMA,
  SLIDES_CERT_HTML5_CANVAS,
  SLIDES_CERT_JENKINS,
  SLIDES_CERT_MEAN_STACK,
  SLIDES_CERT_NGRX,
  SLIDES_CERT_NODE,
  SLIDES_CERT_NPM,
  SLIDES_CERT_PLAYWRIGHT,
  SLIDES_CERT_REACTIVE_ANGULAR,
  SLIDES_CERT_RXJS,
  SLIDES_CERT_SKETCH,
  SLIDES_CERT_STENCIL,
  SLIDES_CERT_WEBPACK5,
} from './cert-lightbox-const';
import {
  SLIDES_PROJECT_ASTRO_CHARTING,
  SLIDES_PROJECT_KB,
  SLIDES_PROJECT_MDT_SCYNC,
} from './projects-lightbox-const';

export enum LightboxKeys {
  AWARDS_BW = 'awards-bw',
  AWARDS_PHOTOSHOOT = 'awards-photoshoot',

  CERT_SKETCH = 'cert-sketch',
  CERT_ADOBE_DIMENSIONS = 'cert-adobe-dimensions',
  CERT_ASYNC_JAVASCRIPT = 'cert-async-javascript',
  CERT_ANGULAR_MATERIAL = 'cert-angular-material',
  CERT_RXJS = 'cert-rxjs',
  CERT_NPM = 'cert-npm',
  CERT_MEAN_STACK = 'cert-mean-stack',
  CERT_NODE = 'cert-node',
  CERT_HTML5_CANVAS = 'cert-html5-canvas',
  CERT_WEBPACK5 = 'cert-webpack5',
  CERT_STENCIL = 'cert-stencil',
  CERT_PlAYWRIGHT = 'cert-playwright',
  CERT_FIGMA = 'cert-figma',
  CERT_JENKINS = 'cert-jenkins',
  CERT_D3 = 'cert-d3',
  CERT_ANGULAR_STYLING = 'cert-angular-styling',
  CERT_REACTIVE_ANGULAR = 'cert-reactive-angular',
  CERT_ELECTRON = 'cert-electron',
  CERT_ANGULAR_TESTING = 'cert-angular-testing',
  CERT_ANGULAR_ANIMATIONS = 'cert-angular-animations',
  CERT_NGRX = 'cert-ngrx',

  PROJECT_ASTRO_CHARTING = 'astro-charting',
  PROJECT_MDT_CSYNC = 'mdt-csync',
  PROJECT_KB = 'kb',
}

export function initLightBoxData(): Map<LightboxKeys, SlideImage[]> {
  const LightBoxMap = new Map<LightboxKeys, SlideImage[]>();
  LightBoxMap.set(LightboxKeys.AWARDS_BW, [...SLIDES_AWARDS_BW]);
  LightBoxMap.set(LightboxKeys.AWARDS_PHOTOSHOOT, [
    ...SLIDES_AWARDS_PHOTOSHOOT,
  ]);

  LightBoxMap.set(LightboxKeys.CERT_WEBPACK5, [...SLIDES_CERT_WEBPACK5]);
  LightBoxMap.set(LightboxKeys.CERT_HTML5_CANVAS, [
    ...SLIDES_CERT_HTML5_CANVAS,
  ]);
  LightBoxMap.set(LightboxKeys.CERT_STENCIL, [...SLIDES_CERT_STENCIL]);
  LightBoxMap.set(LightboxKeys.CERT_PlAYWRIGHT, [...SLIDES_CERT_PLAYWRIGHT]);
  LightBoxMap.set(LightboxKeys.CERT_FIGMA, [...SLIDES_CERT_FIGMA]);
  LightBoxMap.set(LightboxKeys.CERT_JENKINS, [...SLIDES_CERT_JENKINS]);
  LightBoxMap.set(LightboxKeys.CERT_D3, [...SLIDES_CERT_D3]);
  LightBoxMap.set(LightboxKeys.CERT_ANGULAR_STYLING, [
    ...SLIDES_CERT_ANGULAR_STYLING,
  ]);
  LightBoxMap.set(LightboxKeys.CERT_REACTIVE_ANGULAR, [
    ...SLIDES_CERT_REACTIVE_ANGULAR,
  ]);
  LightBoxMap.set(LightboxKeys.CERT_ELECTRON, [...SLIDES_CERT_ELECTRON]);
  LightBoxMap.set(LightboxKeys.CERT_ANGULAR_TESTING, [
    ...SLIDES_CERT_ANGULAR_TESTING,
  ]);
  LightBoxMap.set(LightboxKeys.CERT_ANGULAR_ANIMATIONS, [
    ...SLIDES_CERT_ANGULAR_ANIMATIONS,
  ]);
  LightBoxMap.set(LightboxKeys.CERT_NGRX, [...SLIDES_CERT_NGRX]);
  LightBoxMap.set(LightboxKeys.CERT_SKETCH, [...SLIDES_CERT_SKETCH]);
  LightBoxMap.set(LightboxKeys.CERT_ADOBE_DIMENSIONS, [
    ...SLIDES_CERT_ADOBE_DIMENSIONS,
  ]);
  LightBoxMap.set(LightboxKeys.CERT_ASYNC_JAVASCRIPT, [
    ...SLIDES_CERT_ASYNC_JAVASCRIPT,
  ]);
  LightBoxMap.set(LightboxKeys.CERT_ANGULAR_MATERIAL, [
    ...SLIDES_CERT_ANGULAR_MATERIAL,
  ]);
  LightBoxMap.set(LightboxKeys.CERT_RXJS, [...SLIDES_CERT_RXJS]);
  LightBoxMap.set(LightboxKeys.CERT_NPM, [...SLIDES_CERT_NPM]);
  LightBoxMap.set(LightboxKeys.CERT_MEAN_STACK, [...SLIDES_CERT_MEAN_STACK]);
  LightBoxMap.set(LightboxKeys.CERT_NODE, [...SLIDES_CERT_NODE]);

  LightBoxMap.set(LightboxKeys.PROJECT_ASTRO_CHARTING, [
    ...SLIDES_PROJECT_ASTRO_CHARTING,
  ]);
  LightBoxMap.set(LightboxKeys.PROJECT_MDT_CSYNC, [
    ...SLIDES_PROJECT_MDT_SCYNC,
  ]);
  LightBoxMap.set(LightboxKeys.PROJECT_KB, [...SLIDES_PROJECT_KB]);

  return LightBoxMap;
}
