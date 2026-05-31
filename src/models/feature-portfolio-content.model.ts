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

export type CertificateCardContent = Pick<
  PortfolioCardContent<any>,
  'logo' | 'title' | 'subtitle'
>;

export type ProjectCardContent = Pick<
  PortfolioCardContent<any>,
  'logo' | 'title'
>;

export enum CardContentType {
  PROJECT = 'project',
  CERTIFICATE = 'certificate',
}
