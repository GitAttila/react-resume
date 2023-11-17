import { forwardRef } from 'react';
import classes from './NavigationSection.module.scss';
import { NavItem } from '../../consts/nav-items.consts';

export interface NavigationSectionProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  id?: NavItem;
}

const NavigationSection = forwardRef(
  (props: NavigationSectionProps, ref: React.ForwardedRef<HTMLElement>) => {
    const className = props?.className || '';
    return (
      <section
        ref={ref}
        id={props?.id || ''}
        className={`${classes['ah-c-navigation-section']} ${className}`}
      >
        <div className="ah-container">
          <h2 className="ah-section-title ah-text-gradient--mediumgreydarkgrey">
            {(props.title || '').toLowerCase()}
          </h2>
          <>{props.children}</>
        </div>
      </section>
    );
  }
);

export default NavigationSection;
