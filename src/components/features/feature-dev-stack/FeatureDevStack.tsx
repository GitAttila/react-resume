import React, { Fragment } from 'react';
import StatusBarChart from '../../StatusBarChart/StatusBarChart';
import {
  DESIGN_TOOLS,
  DEVELOPMENT_AUTOMATION,
  FRAMEWORKS_SKILLS,
  PROGRAMMING_LANGUAGES_SKILLS,
  WEB_TECHNOLOGIES,
} from '../../../content/skills-bar-charts';

const FeatureDevStack: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <Fragment>
      <div className={`ah-flex ${className || ''} `}>
        <div className="ah-flex__child--50">
          <StatusBarChart
            title={PROGRAMMING_LANGUAGES_SKILLS.title}
            values={PROGRAMMING_LANGUAGES_SKILLS.values}
          />
        </div>
        <div className="ah-flex__child--50">
          <StatusBarChart
            title={FRAMEWORKS_SKILLS.title}
            values={FRAMEWORKS_SKILLS.values}
          />
        </div>
      </div>
      <div className={`ah-flex ${className || ''} `}>
        <div className="ah-flex__child-50">
          <StatusBarChart
            title={DEVELOPMENT_AUTOMATION.title}
            values={DEVELOPMENT_AUTOMATION.values}
          />
        </div>
        <div className="ah-flex__child--50">
          <StatusBarChart
            title={WEB_TECHNOLOGIES.title}
            values={WEB_TECHNOLOGIES.values}
          />
        </div>
      </div>
      <div className={`ah-flex ${className || ''} `}>
        <div className="ah-flex__child">
          <StatusBarChart
            title={DESIGN_TOOLS.title}
            values={DESIGN_TOOLS.values}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default FeatureDevStack;
