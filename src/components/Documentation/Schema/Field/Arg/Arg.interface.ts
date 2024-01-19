import { FieldType } from '../../Schema.interface';

export interface ArgProps {
  name: string;
  type: FieldType;
  index: number;
  setActiveType: (type: string) => void;
}
