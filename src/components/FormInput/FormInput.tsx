import clsx from 'clsx';
import { FormInputProps } from './FormInput.interface';
import classes from './FormInput.module.scss';
import { useFormContext } from 'react-hook-form';
import checkSVG from '@assets/icons/check.svg';
import eyeSVG from '@assets/icons/eye.svg';
import eyeHideSVG from '@assets/icons/eye-hide.svg';
import { useState } from 'react';
import { useLocalization } from '@src/hooks/useLocalization';

const FormInput = (formInputProps: FormInputProps): JSX.Element => {
  const { type, errorName, label } = formInputProps;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [onFocus, setOnFocus] = useState<boolean>(false);

  const { localizationData } = useLocalization();
  const { validationErrorMessage } = localizationData;

  const onFocusHandler = () => setOnFocus(true);
  const onBlurHandler = () => setOnFocus(false);

  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const isInvalid = errors[errorName];
  const isDirty = dirtyFields[errorName];
  const isPasswordField = errorName === 'password';
  const isValidValue = !(isInvalid && dirtyFields);
  return (
    <label htmlFor={errorName} className={clsx(classes.form__row)}>
      <div className={clsx(classes['name-container'])}>
        <p
          className={clsx(classes['form__row-name'], {
            [classes.black]: !isDirty,
            [classes.red]: isInvalid,
            [classes.green]: !isInvalid,
          })}
        >
          {label}
        </p>
        {!isInvalid && isDirty && (
          <img
            className={clsx(classes['check-image'])}
            src={checkSVG}
            alt="Check Image"
          />
        )}
      </div>
      <input
        {...register(
          errorName,
          isPasswordField
            ? {
                required: true,
                deps: ['confirmPassword'],
              }
            : {
                required: true,
              }
        )}
        type={showPassword ? 'text' : `${type}`}
        id={errorName}
        className={clsx(
          classes.form__input,
          {
            [classes.border_red]: isInvalid && isDirty,
            [classes.border_black]: onFocus && isInvalid == undefined,
            [classes.border_disabled]: onFocus! && isInvalid == undefined,
          },
          { [classes.email_padding]: type === 'email' }
        )}
        autoComplete="off"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      ></input>
      {type === 'password' && (
        <div className={clsx(classes['eye-container'])}>
          {showPassword ? (
            <img
              className={clsx(classes['eye-image'])}
              src={eyeSVG}
              alt="Show Password"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(false);
              }}
            />
          ) : (
            <img
              className={clsx(classes['eye-image'])}
              src={eyeHideSVG}
              alt="Hide Password"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(true);
              }}
            />
          )}
        </div>
      )}
      {!isValidValue && typeof isInvalid?.message == 'string' ? (
        <p className={clsx(classes.error)}>
          {
            (validationErrorMessage as Record<string, string>)[
              isInvalid.message
            ]
          }
        </p>
      ) : (
        <p className={clsx(classes.error)}> </p>
      )}
    </label>
  );
};

export default FormInput;
