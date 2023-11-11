import classes from './MenuIcon.module.scss';

export interface MenuIconProps {
  isOpened: boolean;
  onClick: () => void;
}

export default function MenuIcon(props: MenuIconProps) {
  return (
    <div className={classes['icon-container']}>
      <div
        onClick={props.onClick}
        className={
          props.isOpened
            ? `${classes['menu-icon']} ${classes.active}`
            : `${classes['menu-icon']} ${classes['not-active']}`
        }
      >
        <span className={classes['menu-icon__line']}></span>
        <span className={classes['menu-icon__line']}></span>
        <span className={classes['menu-icon__line']}></span>
      </div>
    </div>
  );
}
