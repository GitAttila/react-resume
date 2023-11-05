import React from 'react';
import styles from './CardIcon.module.scss';
import { Link } from '../../models/link.model';

export interface CardIconProps {
  iconLink: Link;
  className?: string;
  onClick: (iconLink: Link) => void;
}

export default function CardIcon(props: CardIconProps) {
  const iconLink = props.iconLink;
  const className = props?.className || '';
  return (
    <div className={`${styles['ah-c-card-icon']} ${className}`}>
      <a onClick={() => props.onClick(iconLink)}>
        {React.createElement(iconLink.icon)}
      </a>
      <div className={`${styles['ah-c-card-icon__selection']}`}></div>
    </div>
  );
}
