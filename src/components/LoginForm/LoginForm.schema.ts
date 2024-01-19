import { object, string } from 'yup';
import { VALIDATION_RULES_REG_EXP } from '@src/components/RegistrationForm/validationRules';

const requeredMessage = 'requered';

const loginFormSchema = object().shape({
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
});

export default loginFormSchema;
