import React, { ReactNode } from 'react';
import { useState } from 'react';
import MenuIcon from '../MenuIcon/MenuIcon';
import classes from './Header.module.scss';
import Avatar from '../Avatar/Avatar';
import avatarImg from '../../assets/images/AH_portrait_white.png';
import Navigation from '../Navigation/Navigation';
import { AHButton } from '../../models/ah-button.model';
import IconSwitch from '../IconSwitch/IconSwitch';
import { AHIcon } from '../../models/ah-icon.model';

const Header: React.FC<{
  children?: ReactNode;
  className?: string;
  navItems: AHButton[];
  navClicked: (item: AHButton) => void;
}> = ({ children, className, navItems, navClicked }) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const menuHandler = () => {
    setIsMenuOpened((isOpened) => !isOpened);
  };

  const menuItemClickedHandler = (event: React.MouseEvent, item: AHButton) => {
    event.preventDefault();
    navClicked(item);
  };

  // TODO: Add theming dark/light
  // const themeIconHandler = (icon: AHIcon) => {
  //   console.log('clicked: ', icon);
  // };

  return (
    <header
      className={`${classes['ah-c-header']} ${
        className || ''
      } ah-shadow--depth3`}
    >
      <div className="ah-container">
        <div className={classes['ah-c-header__content']}>
          <span className={classes['ah-c-header__caption']}>
            <h1 className={`${classes['ah-c-header__title']} ah-font-headline`}>
              Attila Hazay
            </h1>
            <h3
              className={`${classes['ah-c-header__subtitle']} ah-font-headline`}
            >
              resume
            </h3>
          </span>
          <span className={classes['ah-c-header__spacer']}></span>
          {/* <IconSwitch
            className={`${classes['ah-c-header__theme-icon']}`}
            onClick={themeIconHandler}
          ></IconSwitch> */}
          <MenuIcon onClick={menuHandler} isOpened={isMenuOpened} />
          <span className={classes['ah-c-header__avatar']}>
            <Avatar image={avatarImg}></Avatar>
            <Navigation
              items={navItems}
              opened={isMenuOpened}
              menuItemClicked={menuItemClickedHandler}
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
