import React from 'react';
import { SummaryItem } from '../../../models/summaryItem.model';
import { IoChevronForwardSharp } from 'react-icons/io5';
import styles from './FeatureSummary.module.scss';

const FeatureSummary: React.FC<{
  title: string;
  summaryList: SummaryItem[];
  className?: string;
}> = ({ title, summaryList, className }) => {
  return (
    <div className={className || ''}>
      <h2
        className={`${styles['ah-c-feature-summary__title']} ah-feature-title`}
      >
        {(title || '').toLowerCase()}
      </h2>
      <ul className={styles['ah-c-feature-summary__list']}>
        {summaryList.map((item) => (
          <li
            key={item.id}
            className={styles['ah-c-feature-summary__list-item']}
          >
            <span className={styles['ah-c-feature-summary__list-item__title']}>
              <IoChevronForwardSharp
                className={styles['ah-c-feature-summary__list-item__icon']}
              />
              <h3 className="ah-feature-subtitle">{item.title}</h3>
            </span>
            <p
              className={`${styles['ah-c-feature-summary__list-item__text']} ah-feature-text`}
            >
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureSummary;
