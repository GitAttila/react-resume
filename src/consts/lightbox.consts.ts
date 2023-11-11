import {
  Fullscreen,
  Slideshow,
  Thumbnails,
} from 'yet-another-react-lightbox/plugins';

export const LIGHTBOX_FULL_SETTINGS = [Fullscreen, Slideshow, Thumbnails];

export enum LightBoxGalleryType {
  FULL = 'full',
  ONE_SLIDE = 'one-slide',
}
