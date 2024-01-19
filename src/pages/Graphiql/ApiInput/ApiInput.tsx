import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  graphiqlApiUrlSelector,
  invalidApiSelector,
} from '../../../store/playgroundSlice/playgroundSelectors';
import { setGraphiqlApiUrl } from '../../../store/playgroundSlice/playgroundSlice';
import { getApiShema } from '../../../store/playgroundSlice/playgroundThunks';
import { toast } from 'react-toastify';
import styles from './ApiInput.module.scss';
import { useLocalization } from '@src/hooks/useLocalization';

const ApiInput = () => {
  const { localizationData } = useLocalization();
  const { apiInput, toastMessages } = localizationData;

  const graphiqlApiUrl = useAppSelector(graphiqlApiUrlSelector);
  const invalidApi = useAppSelector(invalidApiSelector);
  const [value, setValue] = useState(graphiqlApiUrl);
  const dispatch = useAppDispatch();

  useEffect(() => {
    invalidApi &&
      toast.error(toastMessages.invalidEndpoint, { draggable: false });
  }, [invalidApi, toastMessages.invalidEndpoint]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = value.trim();
    dispatch(setGraphiqlApiUrl(url));
    if (url) {
      dispatch(getApiShema(url));
    }
  };

  return (
    <>
      <form className={styles.input_form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={value}
          placeholder={apiInput.yourEndpoint}
          onChange={handleChange}
        />
        <CustomButton type="black" size="large">
          {apiInput.sendButtonText}
        </CustomButton>
      </form>
    </>
  );
};

export default ApiInput;
