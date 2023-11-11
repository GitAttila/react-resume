import { StatusBarItem } from '../../models/status-bar.model';
import styles from './StatusBar.module.scss';

export interface StatusBarProps {
  status: StatusBarItem;
}

export default function StatusBar(props: StatusBarProps): JSX.Element {
  const status = props.status;
  return (
    <div className={styles['ah-c-status-bar']}>
      <div
        className={`${styles['ah-c-status-bar__caption']} ah-font-hero ah-ellipsis`}
        style={{ width: `calc(${status.value * 100}% - 1.6rem)` }}
      >
        {(status.caption || '').toLowerCase()}
      </div>
      <div
        className={`${styles['ah-c-status-bar__bar']} ah-bg-gradient--orangeyellow`}
        style={{ width: status.value * 100 + '%' }}
      ></div>
    </div>
  );
}
