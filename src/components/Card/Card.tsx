import styles from './Card.module.scss';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Card(props: CardProps) {
  const children = props.children;
  const className = props?.className || '';
  return (
    <div className={`${styles['ah-c-card']} ah-shadow--depth2 ${className}`}>
      {children}
    </div>
  );
}
