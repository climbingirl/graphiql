import { ReactNode } from 'react';

export type CustomButtonType = 'white' | 'black' | 'transparent';
export type CustomButtonSize = 'small' | 'medium' | 'large';

export interface CustomButtonProps {
  children: ReactNode;
  type: CustomButtonType;
  size: CustomButtonSize;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}
