import { CarouselSlideContent } from '../models/carousel-slide-content.model';
import uxImage from '../assets/images/uxdesign.jpg';
import codingImage from '../assets/images/coding.jpeg';

export const HERO_SLIDES: CarouselSlideContent[] = [
  {
    title: 'Frontend engineer',
    text: 'Senior front-end engineer specialising in Angular, with deep expertise in reactive programming and state management. Delivering scalable solutions across finance, cybersecurity, medical and industrial sectors.',
    image: codingImage,
  },
  {
    title: 'UX designer',
    text: 'Multidisciplinary designer bridging engineering and user experience. Proficient in Figma and the full Adobe Suite, with a proven track record of leading UX design on complex enterprise applications.',
    image: uxImage,
  },
];
