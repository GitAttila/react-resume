import { AHButton } from './ah-button.model';
import { Link } from './link.model';

export interface AwardCardContent {
  image: string;
  description: string;
  link: Link;
  button: AHButton;
}
