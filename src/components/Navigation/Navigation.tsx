import React from 'react';
import classes from './Navigation.module.scss';
import { AHButton } from '../../models/ah-button.model';

export interface NavigationProps {
  items: AHButton[];
  opened: boolean;
  menuItemClicked: (ev: React.MouseEvent, item: AHButton) => void;
}

export default function Navigation(props: NavigationProps): JSX.Element {
  const clickHandler = (ev: React.MouseEvent, item: AHButton) => {
    props.menuItemClicked(ev, item);
  };

  return (
    <ul
      className={`${classes['ah-c-navigation__list']} ah-shadow--depth3 ${
        props.opened ? classes['ah-c-navigation__list--opened'] : ''
      } `}
    >
      {props.items.map((item) => {
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
}
