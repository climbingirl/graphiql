import styles from './NotFound.module.scss';
import ooops_tape from '@assets/images/tape-ooops.svg';
import image from '@assets/images/img-404.svg';
import CustomButton from '@components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useLocalization } from '@src/hooks/useLocalization';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { localizationData } = useLocalization();
  const { notFoundPage } = localizationData;

  return (
    <div className={styles.container}>
      <img src={ooops_tape} alt="Ooops!" />
      <p>{notFoundPage.message}</p>
      <div className={styles.image}>
        <img src={image} alt="404" />
      </div>
      <CustomButton type="white" size="large" onClick={() => navigate('/')}>
        {notFoundPage.linkToWelcome}
      </CustomButton>
    </div>
  );
};

export default NotFoundPage;
