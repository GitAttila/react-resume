import React, { useState } from 'react';
import { Children } from 'react';
import styles from './Carousel.module.scss';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5';

interface CarouselProps {
  children?: React.ReactNode | React.ReactElement;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [atSlide, setAtSlide] = useState<number>(0);
  const childrenArray = Children.toArray(children) as React.ReactElement[];
  const carouselSlideChildrenArray =
    childrenArray.filter(
      (child) => (child.type as React.FC).name.toLowerCase() === 'carouselslide'
    ) || [];
  const slidesCount = carouselSlideChildrenArray.length;
  const moveByPer = 100 / slidesCount;

  const clickHandler = (ev: React.MouseEvent, direction: string) => {
    if (direction === 'left' && atSlide > 0) {
      setAtSlide((atSlide) => atSlide - 1);
    }
    if (direction === 'right' && atSlide < slidesCount - 1) {
      setAtSlide((atSlide) => atSlide + 1);
    }
  };

  return (
    <div className={styles['ah-c-carousel']}>
      <div
        className={styles['ah-c-carousel__slide-container']}
        style={{
          width: `${slidesCount * 100}%`,
          transform: `translateX(${-(atSlide * moveByPer)}%)`,
        }}
      >
        {carouselSlideChildrenArray?.map((childNode, ind) => (
          <div
            key={`carousel-slide-${ind}`}
            className={styles['ah-c-carousel__slide']}
          >
            {childNode}
          </div>
        ))}
      </div>

      <div
        onClick={(e: React.MouseEvent) => clickHandler(e, 'left')}
        className={`${styles['ah-c-carousel__tab']} ${styles['ah-c-carousel__tab--left']}`}
      >
        <span className={`${styles['ah-c-carousel__tab__icon']}`}>
          {React.createElement(IoChevronBackCircleOutline)}
        </span>
      </div>
      <div
        onClick={(e: React.MouseEvent) => clickHandler(e, 'right')}
        className={`${styles['ah-c-carousel__tab']} ${styles['ah-c-carousel__tab--right']}`}
      >
        <span className={`${styles['ah-c-carousel__tab__icon']}`}>
          {React.createElement(IoChevronForwardCircleOutline)}
        </span>
      </div>
    </div>
  );
};

export default Carousel;
