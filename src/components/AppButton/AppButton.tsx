import { AHButton } from '../../models/ah-button.model';
import styles from './AppButton.module.scss';

export interface AHButtonProps extends AHButton {
  className?: string;
  onClick: (id: string) => void;
}

export default function AppButton(props: AHButtonProps) {
  return (
    <button
      className={`
      ${props?.className || ''} 
      ${styles['app-button']} 
      ${props.disabled ? styles['app-button--disabled'] : ''} 
      ${props.selected ? styles['app-button--selected'] : ''}
      `}
      onClick={() => props.onClick(props.id)}
    >
      <span className={`${styles['app-button__label']}`}>
        {props.caption || '- - -'}
      </span>
      <span className={`${styles['app-button__selection']}`}></span>
    </button>
  );
}
