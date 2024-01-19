import { NavLink } from 'react-router-dom';
import { AuthLinkProps } from './AuthLinks.interface';
import CustomButton from '../../CustomButton/CustomButton';
import ROUTES from '../../../router/routes';
import styles from './AuthLinks.module.scss';
import { useLocalization } from '@src/hooks/useLocalization';

export const AuthLink = ({ children, to, type }: AuthLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.active : '')}
    >
      <CustomButton type={type} size="medium">
        {children}
      </CustomButton>
    </NavLink>
  );
};

const AuthLinks = () => {
  const { localizationData } = useLocalization();
  const { sign } = localizationData;
  return (
    <nav className={styles.btns_auth}>
      <AuthLink to={ROUTES.SIGNIN} type="white">
        {sign.in}
      </AuthLink>
      <AuthLink to={ROUTES.SIGNUP} type="black">
        {sign.up}
      </AuthLink>
    </nav>
  );
};

export default AuthLinks;
