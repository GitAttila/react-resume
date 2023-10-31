import React, { ReactNode } from 'react';
import { useState } from 'react';
import MenuIcon from '../MenuIcon/MenuIcon';
import classes from './Header.module.scss';
import Avatar from '../Avatar/Avatar';
import avatarImg from '../../assets/images/AH_portrait_white.png';
import Navigation from '../Navigation/Navigation';
import { AppButton } from '../../models/ah-button.model';

const NAV_ITEMS: AppButton[] = [
  { id: 'navlink-home', caption: 'home', selected: true },
  { id: 'navlink-profile', caption: 'profile', selected: false },
  { id: 'navlink-dev-stack', caption: 'dev stack', selected: false },
  { id: 'navlink-projects', caption: 'projects', selected: false },
  { id: 'navlink-awards', caption: 'awards', selected: false },
  { id: 'navlink-certificates', caption: 'certificates', selected: false },
];

const Header: React.FC<{ children?: ReactNode; className: string }> = ({
  className,
}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [navItems, setNavItems] = useState([...NAV_ITEMS]);

  const menuHandler = () => {
    setIsMenuOpened((isOpened) => !isOpened);
  };

  const menuItemClickedHandler = (event: React.MouseEvent, item: AppButton) => {
    event.preventDefault();
    const updated = navItems.map((navItem) => ({
      ...navItem,
      selected: item.id === navItem.id,
    }));
    setNavItems(updated);
  };

  return (
    <header
      className={`${classes['ah-c-header']} ${className} ah-shadow--depth3`}
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
