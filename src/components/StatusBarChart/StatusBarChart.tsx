import { StatusBarItem } from '../../models/status-bar.model';
import styles from './StatusBarChart.module.scss';
import StatusBar from '../StatusBar/StatusBar';

export interface StatusBarChartProps {
  title: string;
  values: StatusBarItem[];
}

export default function StatusBarChart(
  props: StatusBarChartProps
): JSX.Element {
  const title = props.title;
  const values = props.values;
  return (
    <div className={styles['ah-c-status-bar-chart']}>
      <h3
        className={`${styles['ah-c-status-bar-chart__title']} ah-feature-title`}
      >
        {title}
      </h3>
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
}
