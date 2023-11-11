import classes from './Avatar.module.scss';

export interface AvatarProps {
  className?: string;
  image: string;
}

export default function Avatar(props: AvatarProps): JSX.Element {
  const className = props?.className && '';
  return (
    <div
      className={`${classes['ah-c-avatar__container']} ${className} ah-shadow--depth3`}
    >
      <div className={classes['ah-c-avatar__mask']}></div>
      <div className={classes['ah-c-avatar__image-wrapper']}>
        <img
          className="ah-shadow--inner"
          src={props.image}
          alt="avatar image"
        />
      </div>
    </div>
  );
}
