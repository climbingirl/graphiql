import { ReactNode } from 'react';
import ROUTES from '../../../router/routes';
import { CustomButtonType } from '../../CustomButton/CustomButton.interface';

export interface AuthLinkProps {
  children: ReactNode;
  to: ROUTES;
  type: CustomButtonType;
}
