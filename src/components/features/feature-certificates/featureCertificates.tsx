import { CERTIFICATES_BUTTONS_GROUP } from '../../../content/certificates-buttonsGroup';
import { CertificateCardContent } from '../../../models/certificate-card-content.model';
import { Link } from '../../../models/link.model';
import AppButtonGroup from '../../AppButtonGroup/AppButtonGroup';
import Card from '../../Card/Card';
import CardIcon from '../../CardIcon/CardIcon';
import styles from './featureCertificates.module.scss';

export interface FeatureCertificatesProps {
  className?: string;
  cards: CertificateCardContent[];
  buttonClicked: (id: string) => void;
}

export default function FeatureCertificates(props: FeatureCertificatesProps) {
  const className = props?.className || '';
  const buttons = [...CERTIFICATES_BUTTONS_GROUP];
  const cards = props.cards || [];

  const buttonGroupClickHandler = (id: string) => {
    console.log(id);
  };

  const iconLinkClickHandler = (link: Link) => {
    props.buttonClicked(link.id);
  };

  return (
    <div className={`${styles['ah-c-feature-certificates']} ${className}`}>
      <AppButtonGroup
        buttonsGroup={buttons}
        allButtonEnabled={true}
        onClick={buttonGroupClickHandler}
      ></AppButtonGroup>

      <div className={`${styles['ah-c-feature-certificates__cards']}`}>
        {cards.map((card, ind) => {
          return (
            <Card
              key={`card-certificate-${ind}`}
              className={`${styles['ah-c-feature-certificates__card']}`}
            >
              <div className={styles['ah-c-feature-certificates__content']}>
                {card.linkIcon ? (
                  <CardIcon
                    iconLink={card.linkIcon}
                    className={styles['ah-c-feature-certificates__link']}
                    onClick={(link) => iconLinkClickHandler(link)}
                  ></CardIcon>
                ) : null}
                <div
                  className={styles['ah-c-feature-certificates__logo-wrapper']}
                >
                  <img src={card?.logo || ''} />
                </div>
                <div
                  className={`${styles['ah-c-feature-certificates__title']} ah-feature-subtitle`}
                >
                  {card.title}
                </div>
                <div
                  className={`${styles['ah-c-feature-certificates__divider']} `}
                ></div>
                <div
                  className={`${styles['ah-c-feature-certificates__subtitle']} ah-feature-text`}
                >
                  {card.subtitle}
                </div>
              </div>
              <div
                className={`${styles['ah-c-feature-certificates__bg']} ${styles['ah-c-feature-certificates__bg--overlay']}`}
              ></div>
              <div
                className={`${styles['ah-c-feature-certificates__bg']} ${styles['ah-c-feature-certificates__bg--image']}`}
              >
                <img src={card.image} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
