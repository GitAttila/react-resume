import { AHButton } from '../models/ah-button.model';
import { CertificateFilterKeys } from '../models/certificate-card-content.model';

export const CERTIFICATES_BUTTONS_GROUP: AHButton[] = [
  {
    id: `btn-id--${CertificateFilterKeys.DEVELOPMENT}`, // must have double hyphens for later parsing
    caption: 'development',
  },
  {
    id: `btn-id--${CertificateFilterKeys.AUTOMATION}`, // must have double hyphens for later parsing
    caption: 'automation',
  },
  {
    id: `btn-id--${CertificateFilterKeys.TESTING}`, // must have double hyphens for later parsing
    caption: 'testing',
  },
  {
    id: `btn-id--${CertificateFilterKeys.DESIGN}`, // must have double hyphens for later parsing
    caption: 'design',
  },
];
