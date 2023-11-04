import { SlideImage } from 'yet-another-react-lightbox';
import { SLIDES_AWARDS_BW } from './awards-lightbox-const';
import { SLIDES_AWARDS_PHOTOSHOOT } from './awards-lightbox-photoshoot.const';
import {
  SLIDES_CERT_ANGULAR_STYLING,
  SLIDES_CERT_HTML5_CANVAS,
  SLIDES_CERT_PLAYWRIGHT,
  SLIDES_CERT_STENCIL,
} from './cert-lightbox-const';

export enum LightboxKeys {
  AWARDS_BW = 'awards-bw',
  AWARDS_PHOTOSHOOT = 'awards-photoshoot',
  CERT_PlAYWRIGHT = 'cert-playwright',
  CERT_STENCIL = 'cert-stencil',
  CERT_HTML5_CANVAS = 'cert-html5-canvas',
  CERT_ANGULAR_STYLING = 'cert-angular_styling',
}

export function initLightBoxData(): Map<LightboxKeys, SlideImage[]> {
  const LightBoxMap = new Map<LightboxKeys, SlideImage[]>();
  LightBoxMap.set(LightboxKeys.AWARDS_BW, [...SLIDES_AWARDS_BW]);
  LightBoxMap.set(LightboxKeys.AWARDS_PHOTOSHOOT, [
    ...SLIDES_AWARDS_PHOTOSHOOT,
  ]);
  LightBoxMap.set(LightboxKeys.CERT_PlAYWRIGHT, [...SLIDES_CERT_PLAYWRIGHT]);
  LightBoxMap.set(LightboxKeys.CERT_STENCIL, [...SLIDES_CERT_STENCIL]);
  LightBoxMap.set(LightboxKeys.CERT_HTML5_CANVAS, [
    ...SLIDES_CERT_HTML5_CANVAS,
  ]);
  LightBoxMap.set(LightboxKeys.CERT_ANGULAR_STYLING, [
    ...SLIDES_CERT_ANGULAR_STYLING,
  ]);
  return LightBoxMap;
}
