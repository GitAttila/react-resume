import React, { Fragment } from 'react';
import { AwardCardContent } from '../../../models/award-card-content.model';
import AppButton from '../../AppButton/AppButton';
import Card from '../../Card/Card';
import styles from './FeatureAwards.module.scss';

export interface FeatureAwardProps {
  cards: AwardCardContent[];
}

export default function FeatureAwards(props: FeatureAwardProps) {
  const cardsContent = props.cards;

  const clickHandler = () => {};

  return (
    <div className={`${styles['ah-c-feature-awards']} ah-flex `}>
      {cardsContent.map((card, ind) => {
        return (
          <Card
            key={`card-awards-${ind}`}
            className={`${styles['ah-c-feature-awards__card']} ah-flex__child--50`}
          >
            <div className={styles['ah-c-feature-awards__content']}>
              {card.link.link ? (
                <div className={styles['ah-c-feature-awards__link']}>
                  <a href={card.link.link} target="_blank">
                    {React.createElement(card.link.icon)}
                  </a>
                </div>
              ) : null}
              <div className={styles['ah-c-feature-awards__image-wrapper']}>
                <img src={card?.image || ''} />
              </div>
              <div className={styles['ah-c-feature-awards__divider']}></div>
              <div
                className={`${styles['ah-c-feature-awards__description']} ah-feature-text ah-feature-text--lead`}
              >
                {card.description}
              </div>
              <AppButton
                className={styles['ah-c-feature-awards__button']}
                id={`${card.button.id}-${ind}`}
                caption={card.button.caption}
                onClick={(_) => clickHandler()}
              ></AppButton>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
