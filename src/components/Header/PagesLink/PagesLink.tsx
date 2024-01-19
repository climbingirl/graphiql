import { Link } from 'react-router-dom';
import withRouter from '../../../hoc/withRouter/withRouter';
import ROUTES from '../../../router/routes';
import { PagesLinkProps } from './PagesLink.interface';
import { links } from '../../../constants/headerLinks';
import styles from './PagesLink.module.scss';
import { useLocalization } from '@src/hooks/useLocalization';

const PagesLink = ({ location }: PagesLinkProps) => {
  const { localizationData } = useLocalization();
  const { headerLinks } = localizationData;
  const currentRoute = location.pathname.replace('/', '') || ROUTES.ROOT;
  const path = links?.[currentRoute]?.link || '';
  const title = (headerLinks as Record<string, string>)[currentRoute] || '';
  return (
    <Link className={styles.pages_link} to={path}>
      {title}
    </Link>
  );
};

export default withRouter(PagesLink);
