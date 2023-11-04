import { AHButton } from './ah-button.model';
import { Link } from './link.model';

export interface AwardCardContent {
  logo: string;
  description: string;
  link: Link;
  button: AHButton;
  scaleOnHover: boolean;
}
