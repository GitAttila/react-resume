import { IconType } from 'react-icons';

export interface Link {
  id: string;
  icon: IconType;
  caption?: string;
  link?: string;
}
