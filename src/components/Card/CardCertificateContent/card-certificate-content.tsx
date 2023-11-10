import { CertificateCardContent } from '../../../models/feature-portfolio-content.model';
import styles from './card-certificate-content.module.scss';

export interface CardProps {
  data: CertificateCardContent;
}

export default function CardCertificateContent(props: CardProps) {
  const data = props.data;
  return (
    <div className={styles['ah-c-card-certificate-content']}>
      <div className={styles['ah-c-card-certificate-content__logo-wrapper']}>
        <img src={data?.logo} />
      </div>
      <div className={styles['ah-c-card-certificate-content__descriptors']}>
        <div
          className={`${styles['ah-c-card-certificate-content__title']} ah-feature-subtitle`}
        >
          {data?.title}
        </div>
        <div
          className={`${styles['ah-c-card-certificate-content__divider']} `}
        ></div>
        <div
          className={`${styles['ah-c-card-certificate-content__subtitle']} ah-feature-text`}
        >
          {data?.subtitle}
        </div>
      </div>
    </div>
  );
}
