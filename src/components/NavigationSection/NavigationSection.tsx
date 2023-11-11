import { RefObject } from 'react';
import classes from './NavigationSection.module.scss';

export interface NavigationSectionProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  sectionRef?: RefObject<HTMLElement>;
}

export default function NavigationSection(
  props: NavigationSectionProps
): JSX.Element {
  const className = props?.className || '';
  return (
    <section
      ref={props?.sectionRef}
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
