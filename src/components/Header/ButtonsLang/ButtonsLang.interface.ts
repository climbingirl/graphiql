import { LocalizationKey } from '@src/constants/LocalizationData';
import { ReactNode } from 'react';

export interface ButtonLangProps {
  children: ReactNode;
  active: boolean;
  onChangeLang: () => void;
}

export interface LanguagesBtn {
  lang: LocalizationKey;
  img: string;
}
