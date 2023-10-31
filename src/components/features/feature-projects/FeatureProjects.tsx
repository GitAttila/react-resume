import { PROJECTS_BUTTONS_GROUP } from '../../../content/projects-buttonsGroup';
import AppButtonGroup from '../../AppButtonGroup/AppButtonGroup';
import styles from './FeatureProjects.module.scss';

export const FeatureProjects: React.FC<{
  className?: string;
}> = ({ className }) => {
  const buttons = [...PROJECTS_BUTTONS_GROUP];

  const buttonGroupClickHandler = (id: string) => {
    console.log(id);
  };

  return (
    <div
      className={`${styles['ah-c-feature-projects']} ${
        className ? className : ''
      }`}
    >
      <AppButtonGroup
        buttonsGroup={buttons}
        allButtonEnabled={true}
        onClick={buttonGroupClickHandler}
      ></AppButtonGroup>
    </div>
  );
};

export default FeatureProjects;
