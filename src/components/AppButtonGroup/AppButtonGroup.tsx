import { Fragment, useState } from 'react';
import { AHButton } from '../../models/ah-button.model';
import AppButton from '../AppButton/AppButton';
import styles from './AppButtonGroup.module.scss';
import { BUTTONS_GROUP_ALL_BUTTON } from './AppButtonGroup.config';

export interface AppButtonGroup {
  buttonsGroup: AHButton[];
  allButtonEnabled?: boolean;
  onClick: (id: string) => void;
}

export const AppButtonGroup: React.FC<AppButtonGroup> = ({
  buttonsGroup,
  allButtonEnabled,
  onClick,
}) => {
  const [buttons, setButtons] = useState<AHButton[]>(
    allButtonEnabled
      ? [{ ...BUTTONS_GROUP_ALL_BUTTON }, ...buttonsGroup]
      : [...buttonsGroup]
  );

  const btnClickHandler = (id: string) => {
    const updated = buttons.map((button) => ({
      ...button,
      selected: button.id === id,
    }));
    setButtons(updated);
    onClick(id);
  };

  return (
    <div className={`${styles['app-button-group']}`}>
      {buttons.map((button) => {
        return (
          <Fragment key={button.id}>
            <AppButton
              className={`${styles['app-button-group__button']} ${
                button.id.includes('all')
                  ? styles['app-button-group__button--all']
                  : ''
              }`}
              id={button.id}
              selected={!!button?.selected}
              disabled={!!button?.disabled}
              caption={button.caption}
              onClick={(id) => btnClickHandler(id)}
            ></AppButton>
            {allButtonEnabled && button.id.includes('all') && (
              <div className={`${styles['app-button-group__divider']}`}></div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default AppButtonGroup;
