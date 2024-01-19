import { useLocation } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}
