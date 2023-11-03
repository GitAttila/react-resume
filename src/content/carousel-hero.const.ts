import { CarouselSlideContent } from '../models/carousel-slide-content.model';
import uxImage from '../assets/images/uxdesign.jpg';
import codingImage from '../assets/images/coding.jpeg';

export const HERO_SLIDES: CarouselSlideContent[] = [
  {
    title: 'Frontend engineer',
    text: 'Front-end software engineer with focus on Angular framework including the reactive programming and state management systems.',
    image: codingImage,
  },
  {
    title: 'UX designer',
    text: 'Full - stack Adobe Suite designer with a proven record of design projects across both digital and desktop publishing platforms.',
    image: uxImage,
  },
];
