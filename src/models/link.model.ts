import { IconType } from 'react-icons';
import { AHButton } from './ah-button.model';

export interface Link extends AHButton {
  icon: IconType;
  link?: string;
}
