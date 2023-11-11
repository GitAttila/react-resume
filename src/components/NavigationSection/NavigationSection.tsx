import classes from './NavigationSection.module.scss';

export interface NavigationSectionProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export default function NavigationSection(props: NavigationSectionProps) {
  const className = props?.className && '';
  return (
    <section className={`${classes['ah-c-navigation-section']} ${className}`}>
      <div className="ah-container">
        <h2 className="ah-section-title ah-text-gradient--mediumgreydarkgrey">
          {(props.title || '').toLowerCase()}
        </h2>
        <>{props.children}</>
      </div>
    </section>
  );
}
