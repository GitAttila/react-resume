import { ProjectCardContent } from '../../../models/feature-portfolio-content.model';
import styles from './card-project-content.module.scss';

export interface CardProps {
  data: ProjectCardContent;
}

export default function CardProjectContent(props: CardProps) {
  const data = props.data;
  return (
    <div className={styles['ah-c-card-project-content']}>
      <div className={styles['ah-c-card-project-content__logo-wrapper']}>
        <img src={data?.logo} />
      </div>
      <div className={`${styles['ah-c-card-project-content__divider']} `}></div>
      <div
        className={`${styles['ah-c-card-project-content__title']} ah-feature-subtitle`}
      >
        {data?.title}
      </div>
    </div>
  );
}
