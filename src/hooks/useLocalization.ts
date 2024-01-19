import { useContext } from 'react';
import { LocalizationContext } from '@src/context/LocalizationContext/LocalizationContext';

export function useLocalization() {
  return useContext(LocalizationContext);
}
