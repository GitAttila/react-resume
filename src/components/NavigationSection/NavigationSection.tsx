import React, { ReactNode } from 'react';
import classes from './NavigationSection.module.scss';

const NavigationSection: React.FC<{
  children?: ReactNode;
  title: string;
  className?: string;
}> = ({ children, title, className }) => {
  return (
    <section
      className={`${classes['ah-c-navigation-section']} ${
        className ? className : ''
      }`}
    >
      <div className="ah-container">
        <h2 className="ah-section-title ah-text-gradient--mediumgreydarkgrey">
          {(title || '').toLowerCase()}
        </h2>
        <>{children}</>
      </div>
    </section>
  );
};

export default NavigationSection;
