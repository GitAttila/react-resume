import { PROJECTS_BUTTONS_GROUP } from '../../../content/projects-buttonsGroup';
import AppButtonGroup from '../../AppButtonGroup/AppButtonGroup';
import styles from './FeatureProjects.module.scss';

export interface FeatureProjectsProps {
  className?: string;
}

export default function FeatureProjects(props: FeatureProjectsProps) {
  const className = props?.className || '';
  const buttons = [...PROJECTS_BUTTONS_GROUP];

  const buttonGroupClickHandler = (id: string) => {
    console.log(id);
  };

  return (
    <div className={`${styles['ah-c-feature-projects']} ${className}`}>
      <AppButtonGroup
        buttonsGroup={buttons}
        allButtonEnabled={true}
        onClick={buttonGroupClickHandler}
      ></AppButtonGroup>
    </div>
  );
}
