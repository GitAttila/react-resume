import React from 'react';
import { StatusBarItem } from '../../models/status-bar.model';
import styles from './StatusBarChart.module.scss';
import StatusBar from '../StatusBar/StatusBar';

export const StatusBarChart: React.FC<{
  title: string;
  values: StatusBarItem[];
}> = ({ title, values }) => {
  return (
    <div className={styles['ah-c-status-bar-chart']}>
      <h3 className="ah-feature-title">{title}</h3>
      <ul className={styles['ah-c-status-bar-chart__list']}>
        {values?.map((item) => {
          return (
            <li
              key={item.caption}
              className={styles['ah-c-status-bar-chart__list-item']}
            >
              <StatusBar status={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StatusBarChart;
