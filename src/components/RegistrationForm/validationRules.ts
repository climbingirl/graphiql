export const VALIDATION_RULES_REG_EXP = {
  oneLowercaseChar: /^(?:(?=.*\p{sc=Han})|(?=.*[\p{Ll}]))/u,
  oneUppercaseChar: /^(?:(?=.*\p{sc=Han})|(?=.*[\p{Lu}]))/u,
  oneNumber: /(?=.*\p{Nd})/u,
  oneSpecialChar: /^(?=.*[!@#$%^&*])/u,
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
} as const;
