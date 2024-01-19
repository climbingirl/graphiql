import Button from '../../CustomButton/CustomButton';
import log_out from '../../../assets/icons/log-out.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import ROUTES from '../../../router/routes';
import styles from './SignOutBtn.module.scss';
import { signOutUser } from '@src/services/firebaseApi/firebaseApi';
import { useLocalization } from '@src/hooks/useLocalization';
import { toast } from 'react-toastify';

const SignOutBtn = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { localizationData } = useLocalization();
  const { sign, toastMessages } = localizationData;
  const handleClick = () => {
    signOutUser()
      .then((): void => {
        localStorage.removeItem('refreshToken');
        signOut(() => navigate(ROUTES.ROOT));
        toast.success(toastMessages.successSignOut, { draggable: false });
      })
      .catch((error: Error): void => {
        toast.success(toastMessages.successSignOut + error.message, {
          draggable: false,
        });
      });
  };

  return (
    <Button type="white" onClick={handleClick} size="medium">
      {sign.out} <img className={styles.img} src={log_out} alt="log out" />
    </Button>
  );
};

export default SignOutBtn;
