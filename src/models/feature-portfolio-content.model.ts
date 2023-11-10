import { Link } from './link.model';

export interface PortfolioCardContent<T> {
  type: CardContentType;
  logo: string;
  image: string;
  title: string;
  subtitle?: string;
  keys: T[];
  linkIcon?: Link | null;
  galleryIcon: Link | null;
  scaleOnHover?: boolean;
}

export interface CertificateCardContent
  extends Pick<PortfolioCardContent<any>, 'logo' | 'title' | 'subtitle'> {}

export interface ProjectCardContent
  extends Pick<PortfolioCardContent<any>, 'logo' | 'title'> {}

export enum CardContentType {
  PROJECT = 'project',
  CERTIFICATE = 'certificate',
}
