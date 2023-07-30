import React from 'react';
import { Link } from '../../../models/link.model';
import classes from './FeatureTechStripe.module.scss';

const FeatureTechStripe: React.FC<{ techLinks: Link[] }> = ({ techLinks }) => {
  return (
    <div className={`${classes['ah-c-feature-tech-stripe']}`}>
      <ul className={classes['ah-c-feature-tech-stripe__list']}>
        {techLinks?.map((link) => {
          return (
            <li
              key={link.id}
              className={`${classes['ah-c-feature-tech-stripe__list-item']} ah-filter--shadow1`}
            >
              <a href={link.link} target="_blank">
                {React.createElement(link.icon)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeatureTechStripe;
