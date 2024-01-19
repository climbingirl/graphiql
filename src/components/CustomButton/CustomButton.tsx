import clsx from 'clsx';
import { CustomButtonProps } from './CustomButton.interface';
import styles from './CustomButton.module.scss';

const CustomButton = ({
  children,
  type,
  size,
  active,
  disabled,
  onClick,
}: CustomButtonProps) => {
  const buttonClass = clsx(styles.button, {
    [styles.button_white]: type === 'white',
    [styles.button_black]: type === 'black',
    [styles.button_transparent]: type === 'transparent',
    [styles.button_small]: size === 'small',
    [styles.button_medium]: size === 'medium',
    [styles.button_large]: size === 'large',
    [styles.button_active]: active,
  });

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
