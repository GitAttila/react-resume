import { Link } from './link.model';

export interface CertificateCardContent {
  logo: string;
  image: string;
  title: string;
  subtitle: string;
  keys: string[];
  linkIcon: Link;
  scaleOnHover?: boolean;
}

export enum CertificateFilterKeys {
  DEVELOPMENT = 'cert-development',
  AUTOMATION = 'cert-automation',
  TESTING = 'cert-testing',
  DESIGN = 'cert-design',
}
