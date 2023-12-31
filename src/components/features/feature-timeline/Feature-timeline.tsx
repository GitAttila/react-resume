import React from 'react';
import styles from './Feature-timeline.module.scss';
import { FeatureTimelineItem } from '../../../models/feature-timeline.model';

const FeatureTimeline: React.FC<{
  title: string;
  timelineList: FeatureTimelineItem[];
  className?: string;
}> = ({ title, timelineList, className }) => {
  return (
    <div className={className || ''}>
      <h2
        className={`${styles['ah-c-feature-timeline__title']} ah-feature-title`}
      >
        {(title || '').toLowerCase()}
      </h2>
      <ul className={styles['ah-c-feature-timeline__list']}>
        {timelineList.map((item) => (
          <li
            key={item.id}
            className={styles['ah-c-feature-timeline__list-item']}
          >
            <div className={styles['ah-c-feature-timeline__date']}>
              <h3 className="ah-feature-subtitle">{item.date}</h3>
            </div>
            <div className={styles['ah-c-feature-timeline__feature']}>
              <h3 className="ah-feature-subtitle">{item.title}</h3>
              <h4
                className={`${styles['ah-c-feature-timeline__feature']} ${styles['ah-c-feature-timeline__feature__subtitle']} ah-feature-text ah-feature-text--lead `}
              >
                {item.subtitle}
              </h4>
              {(item?.keys || []).map((key) => (
                <div
                  key={key}
                  className={`${styles['ah-c-feature-timeline__chip']} ah-font-bold`}
                >
                  {key}
                </div>
              ))}
              <p
                className={`${styles['ah-c-feature-timeline__feature__description']} ah-feature-text `}
              >
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureTimeline;
