import React, { ReactNode } from 'react';
import classes from './Navigation.module.scss';
import { NavLink } from '../../models/navlink.model';

const Navigation: React.FC<{
  children?: ReactNode;
  items: NavLink[];
  opened: boolean;
  menuItemClicked: (event: React.MouseEvent, item: NavLink) => void;
}> = ({ items, opened, menuItemClicked }) => {
  const clickHandler = (ev: React.MouseEvent, item: NavLink) => {
    menuItemClicked(ev, item);
  };

  return (
    <ul
      className={`${classes['ah-c-navigation__list']} ah-shadow--depth3 ${
        opened ? classes['ah-c-navigation__list--opened'] : ''
      } `}
    >
      {items.map((item) => {
        return (
          <li
            onClick={(e) => clickHandler(e, item)}
            key={item.id}
            className={` ${classes['ah-c-navigation__list-item']} ${
              item.selected
                ? classes['ah-c-navigation__list-item--selected']
                : ''
            }`}
          >
            {item.caption}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
