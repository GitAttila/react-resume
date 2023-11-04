import { AHButton } from '../models/ah-button.model';
import { CertificateFilterKeys } from '../models/certificate-card-content.model';

export const CERTIFICATES_BUTTONS_GROUP: AHButton[] = [
  {
    id: `btn-id-${CertificateFilterKeys.DEVELOPMENT}`,
    caption: 'development',
  },
  {
    id: `btn-id-${CertificateFilterKeys.AUTOMATION}`,
    caption: 'automation',
  },
  {
    id: `btn-id-${CertificateFilterKeys.TESTING}`,
    caption: 'testing',
  },
  {
    id: `btn-id-${CertificateFilterKeys.DESIGN}`,
    caption: 'design',
  },
];
