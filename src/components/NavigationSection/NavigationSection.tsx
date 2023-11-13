import { RefObject } from 'react';
import classes from './NavigationSection.module.scss';
import { NavItem } from '../../consts/nav-items.consts';

export interface NavigationSectionProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  id?: NavItem;
  sectionRef?: RefObject<HTMLElement>;
}

export default function NavigationSection(
  props: NavigationSectionProps
): JSX.Element {
  const className = props?.className || '';
  return (
    <section
      ref={props?.sectionRef}
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
