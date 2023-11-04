import { AWARDS_BTN_VIEW_DETAILS } from '../components/Features/feature-awards/FeatureAwards.config';
import { AwardCardContent } from '../models/award-card-content.model';
import BWLogo from '../assets/images/awards/BW/BW_logo.png';
import Photoshoot from '../assets/images/awards/photoshoot/photoshoot_logo.png';
import { Link } from '../models/link.model';
import { IoOpenOutline } from 'react-icons/io5';
import { LightboxKeys } from './lightbox/lightbox.map';

export const BWLink: Link = {
  id: 'awards-link-bw',
  caption: '',
  icon: IoOpenOutline,
  link: 'https://www.bandwmag.com/galleries/bw/contests/14/categories/3/photographs/40923',
};

export const PhotoshootLink: Link = {
  id: 'awards-link-photoshoot',
  caption: '',
  icon: IoOpenOutline,
  link: '',
};

export const AWARD_CARDS: AwardCardContent[] = [
  {
    logo: BWLogo,
    description: 'Single Image Winner 2013, category METAPHOR/ABSTRACT.',
    link: BWLink,
    scaleOnHover: true,
    button: {
      ...AWARDS_BTN_VIEW_DETAILS,
      id: `id-awards-button--${LightboxKeys.AWARDS_BW}`, // must have double hyphens for later parsing
    },
  },
  {
    logo: Photoshoot,
    description: '1st prize, Nude duet category, 2013.',
    link: PhotoshootLink,
    scaleOnHover: true,
    button: {
      ...AWARDS_BTN_VIEW_DETAILS,
      id: `id-awards-button--${LightboxKeys.AWARDS_PHOTOSHOOT}`, // must have double hyphens for later parsing
    },
  },
];
