import { Dispatch, SetStateAction } from 'react';
import { LocalizationData } from '../../../constants/LocalizationData';

export type sectionType =
  LocalizationData['requestToolbar']['sections'][number];

export interface RequestToolbarProps {
  isToolbarOpen: boolean;
  onOpenToolbar: Dispatch<SetStateAction<boolean>>;
}
