import { Link } from './link.model';

export interface PortfolioCardContent<T> {
  logo: string;
  image: string;
  title: string;
  subtitle?: string;
  keys: T[];
  linkIcon?: Link | null;
  galleryIcon: Link | null;
  scaleOnHover?: boolean;
}
