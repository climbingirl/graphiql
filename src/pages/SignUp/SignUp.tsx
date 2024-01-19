import classes from './SignUp.module.scss';
import { useEffect } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ROUTES from '../../router/routes';
import RegistrationForm from '@src/components/RegistrationForm/RegistrationForm';
import clsx from 'clsx';
import { auth } from '@src/services/firebaseApi/firebaseApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocalization } from '@src/hooks/useLocalization';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { userToken, signIn } = useAuth();
  const [user] = useAuthState(auth);

  const { localizationData } = useLocalization();
  const { sign, account } = localizationData;

  useEffect(() => {
    if (user) {
      localStorage.setItem('refreshToken', user.refreshToken);
      signIn(user.refreshToken, () => navigate(ROUTES.ROOT + ROUTES.GRAPHIQL));
    }
  }, [user, signIn, navigate]);

  if (userToken) {
    return <Navigate to={ROUTES.ROOT + ROUTES.GRAPHIQL} replace />;
  }

  return (
    <div data-testid="signup-page" className={clsx(classes.wrapper)}>
      <div className={clsx(classes.header)}>
        <h1>{sign.up}</h1>
        <p className={clsx(classes.header__question)}>
          {account.have}
          <NavLink
            to={ROUTES.ROOT + ROUTES.SIGNIN}
            className={classes.header__link}
          >
            {sign.in}
          </NavLink>
        </p>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default SignUpPage;
