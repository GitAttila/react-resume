import { IconType } from 'react-icons';
import { AHButton } from './ah-button.model';

export interface AHIcon extends Omit<AHButton, 'caption'> {
  icon: IconType;
}
