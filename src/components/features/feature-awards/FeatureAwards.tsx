import { AwardCardContent } from '../../../models/award-card-content.model';
import AppButton from '../../AppButton/AppButton';
import Card from '../../Card/Card';
import styles from './FeatureAwards.module.scss';
import CardIcon from '../../CardIcon/CardIcon';
import { Link } from '../../../models/link.model';

export interface FeatureAwardProps {
  cards: AwardCardContent[];
  buttonClicked: (id: string) => void;
  linkClicked: (link: Link) => void;
}

export default function FeatureAwards(props: FeatureAwardProps) {
  const cardsContent = props.cards;
  const buttonClicked = props.buttonClicked;

  const clickHandlerCardButton = (id: string) => {
    buttonClicked(id);
  };

  const onLinkClickHandler = (link: Link) => {
    props.linkClicked(link);
  };

  return (
    <div className={`${styles['ah-c-feature-awards']} ah-flex `}>
      {cardsContent.map((card, ind) => {
        return (
          <Card
            key={`card-awards-${ind}`}
            className={`${styles['ah-c-feature-awards__card']} ah-flex__child--50`}
            scaleOnHover={card.scaleOnHover}
          >
            <div className={styles['ah-c-feature-awards__content']}>
              {card.link.link ? (
                <CardIcon
                  className={styles['ah-c-feature-awards__link']}
                  iconLink={card.link}
                  onClick={(link) => onLinkClickHandler(link)}
                ></CardIcon>
              ) : null}
              <div className={styles['ah-c-feature-awards__image-wrapper']}>
                <img src={card?.logo || ''} />
              </div>
              <div className={styles['ah-c-feature-awards__divider']}></div>
              <div
                className={`${styles['ah-c-feature-awards__description']} ah-feature-text ah-feature-text--lead`}
              >
                {card.description}
              </div>
              <AppButton
                className={styles['ah-c-feature-awards__button']}
                id={`${card.button.id}`}
                caption={card.button.caption}
                onClick={(id) => clickHandlerCardButton(id)}
              ></AppButton>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
