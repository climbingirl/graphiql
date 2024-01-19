import classes from './SignIn.module.scss';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import ROUTES from '../../router/routes';
import clsx from 'clsx';
import LoginForm from '@src/components/LoginForm/LoginForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@src/services/firebaseApi/firebaseApi';
import { useLocalization } from '@src/hooks/useLocalization';

const SignInPage = () => {
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
    <div data-testid="signin-page" className={clsx(classes.wrapper)}>
      <div className={clsx(classes.header)}>
        <h1>{sign.in}</h1>
        <p className={clsx(classes.header__question)}>
          {account.notHave}
          <NavLink
            to={ROUTES.ROOT + ROUTES.SIGNUP}
            className={classes.header__link}
          >
            {sign.up}
          </NavLink>
        </p>
      </div>
      <LoginForm />
    </div>
  );
};

export default SignInPage;
