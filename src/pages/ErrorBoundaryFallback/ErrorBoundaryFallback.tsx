import styles from './ErrorBoundaryFallback.module.scss';
import clsx from 'clsx';
import CustomButton from '@src/components/CustomButton/CustomButton';
import { useLocalization } from '@src/hooks/useLocalization';

const ErrorBoundaryFallback = (): JSX.Element => {
  const { localizationData } = useLocalization();
  const { errorBoundary } = localizationData;
  const onClickHandler = () => {
    window.location.reload();
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.container)}>
        <h1>{errorBoundary.header}</h1>
        <CustomButton type="white" size="large" onClick={onClickHandler}>
          {errorBoundary.reloadButtonText}
        </CustomButton>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallback;
