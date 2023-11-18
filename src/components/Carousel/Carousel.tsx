import React, { ReactNode, useEffect, useState } from 'react';
import { Children } from 'react';
import styles from './Carousel.module.scss';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5';

interface CarouselProps {
  children?: ReactNode | ReactNode[];
  rollOver?: boolean;
  indicators?: boolean;
  timer?: number; // milliseconds
}

export default function Carousel(props: CarouselProps): JSX.Element {
  const timer = props?.timer || 0;
  const [atSlide, setAtSlide] = useState<number>(0);

  const childrenArray = Children.toArray(props.children) as JSX.Element[];

  const carouselHero = childrenArray.find((child) =>
    child?.key?.includes('hero')
  );

  const carouselSlideChildrenArray =
    childrenArray.filter((child) => child?.key?.includes('slide')) || [];
  const slidesCount = carouselSlideChildrenArray.length;
  const moveByPer = Math.floor((100 / slidesCount) * 1000) / 1000;

  useEffect(() => {
    if (timer) {
      const slideInterval = setInterval(() => {
        setAtSlide((atSlide) => atSlide + 1);
      }, timer);
      return () => {
        clearInterval(slideInterval);
      };
    }
  }, [timer]);

  const clickHandler = (ev: React.MouseEvent, direction: string) => {
    ev.preventDefault();
    if (props.rollOver) {
      if (direction === 'left') {
        setAtSlide((atSlide) => atSlide - 1);
      }
      if (direction === 'right') {
        setAtSlide((atSlide) => atSlide + 1);
      }
    } else {
      if (direction === 'left' && atSlide > 0) {
        setAtSlide((atSlide) => atSlide - 1);
      }
      if (direction === 'right' && atSlide < slidesCount - 1) {
        setAtSlide((atSlide) => atSlide + 1);
      }
    }
  };

  const indicatorClickHandler = (index: number) => {
    setAtSlide(index);
  };

  const activeSlideIndex =
    atSlide < 0
      ? Math.abs((Math.abs(atSlide + 1) % 3) - 2)
      : atSlide % slidesCount;

  return (
    <div className={styles['ah-c-carousel']}>
      <div
        className={styles['ah-c-carousel__indicators-container']}
        style={{ display: props.indicators ? 'block' : 'none' }}
      >
        <div className={styles['ah-c-carousel__indicators']}>
          {[...Array(slidesCount).keys()]?.map((count) => {
            return (
              <div
                key={`indicator-${count}`}
                onClick={() => indicatorClickHandler(count)}
                className={`${styles['ah-c-carousel__indicator']} ${
                  count === activeSlideIndex
                    ? styles['ah-c-carousel__indicator--active']
                    : ''
                }`}
              >
                <div className={styles['ah-c-carousel__indicator-slab']}></div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={styles['ah-c-carousel__slide-container']}
        style={{
          width: `${slidesCount * 100}%`,
          transform: `translateX(${-(activeSlideIndex * moveByPer)}%)`,
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

      <div className={styles['ah-c-carousel__hero']}>{carouselHero}</div>

      <div
        onClick={(e: React.MouseEvent) => clickHandler(e, 'left')}
        className={`${styles['ah-c-carousel__control']} ${styles['ah-c-carousel__control--left']}`}
      >
        <span className={`${styles['ah-c-carousel__control__icon-container']}`}>
          <span className={`${styles['ah-c-carousel__control__icon']}`}>
            {React.createElement(IoChevronBackCircleOutline)}
          </span>
        </span>
      </div>

      <div
        onClick={(e: React.MouseEvent) => clickHandler(e, 'right')}
        className={`${styles['ah-c-carousel__control']} ${styles['ah-c-carousel__control--right']}`}
      >
        <span className={`${styles['ah-c-carousel__control__icon-container']}`}>
          <span className={`${styles['ah-c-carousel__control__icon']}`}>
            {React.createElement(IoChevronForwardCircleOutline)}
          </span>
        </span>
      </div>
    </div>
  );
}
