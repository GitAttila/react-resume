import React from 'react';
import { StatusBarItem } from '../../models/status-bar.model';
import styles from './StatusBar.module.scss';

export const StatusBar: React.FC<{ status: StatusBarItem }> = ({ status }) => {
  return (
    <div className={styles['ah-c-status-bar']}>
      <div className={`${styles['ah-c-status-bar__caption']} ah-font-hero`}>
        {(status.caption || '').toLowerCase()}
      </div>
      <div
        className={`${styles['ah-c-status-bar__bar']} ah-bg-gradient--yelloworange`}
        style={{ width: status.value * 100 + '%' }}
      ></div>
    </div>
  );
};

export default StatusBar;
