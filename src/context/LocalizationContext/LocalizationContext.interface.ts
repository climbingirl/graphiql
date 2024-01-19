import {
  LocalizationData,
  LocalizationKey,
} from '@src/constants/LocalizationData';
import { ReactElement } from 'react';

export interface LocalizationContextProps {
  children: ReactElement;
}

export interface LocalizationContexValue {
  activeLang: LocalizationKey;
  localizationData: LocalizationData;
  setActiveLang: React.Dispatch<React.SetStateAction<LocalizationKey>>;
}
