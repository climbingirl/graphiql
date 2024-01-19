import { FieldType } from '../Schema.interface';

export interface TypesProps {
  types: FieldType[];
  setActiveType: (type: string) => void;
}
