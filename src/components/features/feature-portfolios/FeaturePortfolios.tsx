import styles from './FeaturePortfolios.module.scss';
import { useState } from 'react';
import { CertificateFilterKeys } from '../../../content/certificates-buttonsGroup';
import { Link } from '../../../models/link.model';
import AppButtonGroup from '../../AppButtonGroup/AppButtonGroup';
import Card from '../../Card/Card';
import CardIcon from '../../CardIcon/CardIcon';
import {
  CardContentType,
  PortfolioCardContent,
} from '../../../models/feature-portfolio-content.model';
import { ProjectFilterKeys } from '../../../content/projects-buttonsGroup';
import { AHButton } from '../../../models/ah-button.model';
import CertificateCardContent from '../../Card/CardCertificateContent/card-certificate-content';
import CardProjectContent from '../../Card/CardProjectContent/card-project-content';

export interface FeaturePortfoliosProps {
  className?: string;
  buttonsGroup: AHButton[];
  cards: PortfolioCardContent<CertificateFilterKeys | ProjectFilterKeys>[];
  buttonClicked: (id: string) => void;
  linkClicked: (link: Link) => void;
}

export default function FeaturePortfolios(props: FeaturePortfoliosProps) {
  const className = props?.className || '';
  const buttons = props.buttonsGroup || [];
  const cards = props.cards || [];
  const [filteredCards, setFilteredCards] =
    useState<PortfolioCardContent<CertificateFilterKeys | ProjectFilterKeys>[]>(
      cards
    );

  const buttonGroupClickHandler = (id: string) => {
    const idFragmentsCount = id.split('--').length;
    const key = idFragmentsCount
      ? id.split('--')[idFragmentsCount - 1]
      : ('' as CertificateFilterKeys | ProjectFilterKeys);
    let filtered =
      cards.filter((card) => !!card.keys.find((cardKey) => cardKey === key)) ||
      [];
    filtered = key.includes('all') ? cards : filtered;
    setFilteredCards(filtered);
  };

  const iconLinkClickHandler = (link: Link) => {
    props.buttonClicked(link.id);
  };

  const linkClickHandler = (link: Link) => {
    props.linkClicked(link);
  };

  return (
    <div className={`${styles['ah-c-feature-portfolios']} ${className}`}>
      <AppButtonGroup
        buttonsGroup={buttons}
        allButtonEnabled={true}
        onClick={buttonGroupClickHandler}
      ></AppButtonGroup>

      <div className={`${styles['ah-c-feature-portfolios__cards']}`}>
        {filteredCards.map((card, ind) => {
          return (
            <Card
              key={`card-portfolio-${ind}`}
              className={`${styles['ah-c-feature-portfolios__card']}`}
            >
              <div className={styles['ah-c-feature-portfolios__content']}>
                {card.linkIcon ? (
                  <CardIcon
                    iconLink={card.linkIcon}
                    className={styles['ah-c-feature-portfolios__link-external']}
                    onClick={(link) => linkClickHandler(link)}
                  ></CardIcon>
                ) : null}
                {card.galleryIcon ? (
                  <CardIcon
                    iconLink={card.galleryIcon}
                    className={styles['ah-c-feature-portfolios__link-gallery']}
                    onClick={(link) => iconLinkClickHandler(link)}
                  ></CardIcon>
                ) : null}

                {card.type === CardContentType.CERTIFICATE && (
                  <CertificateCardContent
                    data={{
                      logo: card?.logo,
                      title: card?.title,
                      subtitle: card?.subtitle,
                    }}
                  ></CertificateCardContent>
                )}
                {card.type === CardContentType.PROJECT && (
                  <CardProjectContent
                    data={{
                      logo: card?.logo,
                      title: card?.title,
                    }}
                  ></CardProjectContent>
                )}
              </div>
              <div
                className={`${styles['ah-c-feature-portfolios__bg']} ${styles['ah-c-feature-portfolios__bg--overlay']}`}
              ></div>
              <div
                className={`${styles['ah-c-feature-portfolios__bg']} ${styles['ah-c-feature-portfolios__bg--image']}`}
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
