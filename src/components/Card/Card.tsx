import styles from './Card.module.scss';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  scaleOnHover?: boolean;
}

export default function Card(props: CardProps) {
  const children = props.children;
  const className = props?.className || '';
  const scale = !!props?.scaleOnHover;
  return (
    <div
      className={`${styles['ah-c-card']} ah-shadow--depth2 ${className} ${
        scale ? styles['ah-c-card--scale-on-hover'] : ''
      }`}
    >
      {children}
    </div>
  );
}
