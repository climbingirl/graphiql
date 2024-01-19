import classes from './RegistrationForm.module.scss';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { RegistrationFormData } from './RegistrationForm.interfaces';
import registrationFormSchema from './RegistrationForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import FormInput from '@components/FormInput/FormInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { auth } from '@src/services/firebaseApi/firebaseApi';
import { useEffect } from 'react';
import Loader from '@components/Loader/Loader';
import { useLocalization } from '@src/hooks/useLocalization';

const FIELDS_COUNT = 3;

const RegistrationForm = (): JSX.Element => {
  const methods = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationFormSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    formState: { dirtyFields, errors },
  } = methods;

  const { localizationData } = useLocalization();
  const { form, firebaseErrors } = localizationData;

  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const onSubmitHandler: SubmitHandler<RegistrationFormData> = (data) => {
    createUserWithEmailAndPassword(data.email, data.password).then(() => {
      signInWithEmailAndPassword(data.email, data.password);
    });
  };

  useEffect(() => {
    error &&
      toast.error(
        firebaseErrors[error.code as keyof typeof firebaseErrors] || error.code,
        { draggable: false }
      );
  }, [error, firebaseErrors]);

  const isDirtyFields = Object.values(dirtyFields).length < FIELDS_COUNT;
  const isError = Object.keys(errors).length > 0;

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <form
        className={clsx(classes.form)}
        onSubmit={handleSubmit(onSubmitHandler)}
        autoComplete="off"
      >
        <input type="password" style={{ display: 'none' }}></input>
        <FormProvider {...methods}>
          <FormInput type="email" errorName="email" label={form.emailLabel} />
          <FormInput
            type="password"
            errorName="password"
            label={form.passwordLabel}
          />
          <FormInput
            type="password"
            errorName="confirmPassword"
            label={form.confirmPasswordLabel}
          />
        </FormProvider>
        <button
          className={clsx(classes.button_submit)}
          disabled={isDirtyFields || isError}
        >
          {form.submitButton}
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
