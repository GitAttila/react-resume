import React, { useState } from 'react';
import styles from './IconSwitch.module.scss';
import { AHIcon } from '../../models/ah-icon.model';
import { ICON_DARK_THEME, ICON_LIGHT_THEME } from './Iconswitch.config';

export interface IconSwitchProps {
  className?: string;
  onClick: (icon: AHIcon) => void;
}

export default function IconSwitch(props: IconSwitchProps) {
  const className = props?.className || '';
  const darkThemeIcon: AHIcon = { ...ICON_DARK_THEME };
  const lightThemeIcon: AHIcon = { ...ICON_LIGHT_THEME };

  const [selectedIcon, setSelectedIcon] = useState<AHIcon>(darkThemeIcon);

  const iconClickedHandler = (ev: React.MouseEvent, iconClicked: AHIcon) => {
    ev.preventDefault();
    setSelectedIcon(
      iconClicked.id.includes('light') ? darkThemeIcon : lightThemeIcon
    );
    props.onClick(iconClicked);
  };

  return (
    <div
      className={`${styles['ah-c-icon-switch']} ${className}`}
      onClick={(e: React.MouseEvent) => iconClickedHandler(e, selectedIcon)}
    >
      <i className={`${styles['ah-c-icon-switch__icon']}`}>
        {React.createElement(selectedIcon.icon)}
      </i>
      <div className={`${styles['ah-c-icon-switch__bg']}`}></div>
    </div>
  );
}
