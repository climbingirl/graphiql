import { Navigate } from 'react-router-dom';
import { RequireAuthProps } from './RequireAuth.interface';
import { useAuth } from '../../hooks/useAuth';
import ROUTES from '../../router/routes';

const RequireAuth = ({ children }: RequireAuthProps) => {
  const { userToken } = useAuth();

  if (!userToken) {
    return <Navigate to={ROUTES.ROOT + ROUTES.SIGNIN} />;
  }

  return children;
};

export default RequireAuth;
