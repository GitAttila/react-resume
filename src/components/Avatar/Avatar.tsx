import React from 'react';
import classes from './Avatar.module.scss';

const Avatar: React.FC<{
  className?: string;
  image: string;
}> = ({ className, image }) => {
  return (
    <div
      className={`${classes['ah-c-avatar__container']} ${
        className || ''
      } ah-shadow--depth3`}
    >
      <div className={classes['ah-c-avatar__mask']}></div>
      <div className={classes['ah-c-avatar__image-wrapper']}>
        <img className="ah-shadow--inner" src={image} alt="avatar image" />
      </div>
    </div>
  );
};

export default Avatar;
