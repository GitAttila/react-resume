import React from 'react';
import classes from './FeatureDownload.module.scss';
import { FaRegFilePdf } from 'react-icons/fa';
import { IoArrowForward, IoArrowDown } from 'react-icons/io5';

const FeatureDownload: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`${className || ''} ${
        classes['ah-c-feature-download']
      } ah-bg-gradient--mediumgreydarkgrey`}
    >
      <div className="ah-container">
        <div className={classes['ah-c-feature-download__content']}>
          <div className={classes['ah-c-feature-download__text']}>
            <h2
              className={`${classes['ah-c-feature-download__title']} ah-feature-subtitle ah-font-hero`}
            >
              Need a printed version ?
            </h2>
            <p
              className={`${classes['ah-c-feature-download__subtitle']} ah-feature-text`}
            >
              Feel free to download it right here.
            </p>
          </div>
          <div
            className={` ${classes['ah-c-feature-download__arrow']} ${classes['ah-c-feature-download__arrow--animated']} `}
          >
            <IoArrowForward
              className={classes['ah-c-feature-download__arrow--right']}
            />
            <IoArrowDown
              className={classes['ah-c-feature-download__arrow--down']}
            />
          </div>
          <div className={classes['ah-c-feature-download__pdf-container']}>
            <a
              href="../../../../src/assets/pdfs/AttilaHazay_Resume_2023.pdf"
              download
            >
              <FaRegFilePdf />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDownload;
