import styles from './FeatureHero.module.scss';
import Carousel from '../../Carousel/Carousel';
import CarouselHero from '../../CarouselHero/CarouselHero';
import AHsignature from '../../../assets/images/ah_signature_white.png';
import { CarouselSlideContent } from '../../../models/carousel-slide-content.model';
import CarouselSlide from '../../CarouselSlide/CarouselSlide';
import { RefObject } from 'react';
import { NavItem } from '../../../consts/nav-items.consts';

interface FeatureHeroProps {
  id?: NavItem;
  className?: string;
  featureHeroRef?: RefObject<HTMLDivElement>;
  slides: CarouselSlideContent[];
}

export default function FeatureHero(
  props: FeatureHeroProps
): React.ReactElement {
  const className = props?.className || '';
  const carouselSlides = props.slides;

  return (
    <div
      id={props?.id || ''}
      ref={props?.featureHeroRef}
      className={`${className} ${styles['app-c-carousel__container']}`}
    >
      <Carousel rollOver={true} indicators={true} timer={14000}>
        {carouselSlides.map((carouselSlide) => {
          return (
            <CarouselSlide
              key={carouselSlide.title}
              className={styles['app-c-carousel__slide']}
            >
              <div className={`${styles['app-c-carousel__slide__text']}`}>
                <h3 className={'ah-feature-title'}>{carouselSlide.title}</h3>
                <p className={'ah-feature-subtitle'}>{carouselSlide.text}</p>
              </div>
              <div className={styles['app-c-carousel__slide__image']}>
                <img src={carouselSlide.image} />
              </div>
              <div
                className={`${styles['app-c-carousel__slide__overlay']} ah-bg-gradient--yelloworange`}
              ></div>
            </CarouselSlide>
          );
        })}
        <CarouselHero className={styles['app-c-carousel__hero']}>
          <img
            className={styles['app-c-carousel__hero__image']}
            src={AHsignature}
            alt="AH signature"
          />
          <h1
            className={`${
              styles['app-c-carousel__title']
            } ${'ah-section-title'}`}
          >
            &mdash;&nbsp;interactive&nbsp;&mdash;&nbsp;resume&nbsp;&mdash;
          </h1>
        </CarouselHero>
      </Carousel>
    </div>
  );
}
