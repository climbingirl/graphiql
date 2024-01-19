import { object, ref, string } from 'yup';
import { VALIDATION_RULES_REG_EXP } from './validationRules';

const requeredMessage = 'requered';

const registrationFormSchema = object().shape({
  email: string()
    .required(requeredMessage)
    .email('email')
    .matches(VALIDATION_RULES_REG_EXP.email, 'email'),
  password: string()
    .required(requeredMessage)
    .matches(VALIDATION_RULES_REG_EXP.oneLowercaseChar, 'oneLowercaseChar')
    .matches(VALIDATION_RULES_REG_EXP.oneUppercaseChar, 'oneUppercaseChar')
    .matches(VALIDATION_RULES_REG_EXP.oneNumber, 'oneNumber')
    .matches(VALIDATION_RULES_REG_EXP.oneSpecialChar, 'oneSpecialChar')
    .min(8, 'shortPassword'),
  confirmPassword: string()
    .required(requeredMessage)
    .oneOf([ref('password')], 'confirmPassword'),
});

export default registrationFormSchema;
