import { Link } from './link.model';

export enum CertificateFilterKeys {
  DEVELOPMENT = 'cert-development',
  AUTOMATION = 'cert-automation',
  TESTING = 'cert-testing',
  DESIGN = 'cert-design',
}

export interface CertificateCardContent {
  logo: string;
  image: string;
  title: string;
  subtitle: string;
  keys: CertificateFilterKeys[];
  linkIcon: Link;
  scaleOnHover?: boolean;
}
