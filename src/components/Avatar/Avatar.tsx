import classes from './Avatar.module.scss';

export interface AvatarProps {
  className?: string;
  image: string;
  showMask?: boolean;
}

export default function Avatar(props: AvatarProps): React.ReactElement {
  const className = props?.className || '';
  const showMask = props?.showMask ?? true;
  return (
    <div
      className={`${classes['ah-c-avatar__container']} ${className} ah-shadow--depth3`}
    >
      {showMask && <div className={classes['ah-c-avatar__mask']}></div>}
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
