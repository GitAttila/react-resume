import { AHButton } from '../../models/ah-button.model';
import styles from './AppButton.module.scss';

export interface AHButtonProps extends AHButton {
  className?: string;
  onClick: (id: string) => void;
}

const AppButton: React.FC<AHButtonProps> = ({
  id,
  caption,
  disabled = false,
  selected = false,
  onClick,
  className,
}) => {
  return (
    <button
      className={`
      ${className} 
      ${styles['app-button']} 
      ${disabled ? styles['app-button--disabled'] : ''} 
      ${selected ? styles['app-button--selected'] : ''}
      `}
      onClick={() => onClick(id)}
    >
      <span className={`${styles['app-button__label']}`}>
        {caption || '- - -'}
      </span>
      <span className={`${styles['app-button__selection']}`}></span>
    </button>
  );
};

export default AppButton;
