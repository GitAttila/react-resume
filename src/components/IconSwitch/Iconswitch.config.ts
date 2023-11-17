import { AHIcon } from '../../models/ah-icon.model';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

export const ICON_LIGHT_THEME: AHIcon = {
  id: 'id-icon-light-theme',
  icon: IoSunnyOutline,
  selected: false,
  disabled: true,
};

export const ICON_DARK_THEME: AHIcon = {
  id: 'id-icon-dark-theme',
  icon: IoMoonOutline,
  selected: false,
  disabled: true,
};
