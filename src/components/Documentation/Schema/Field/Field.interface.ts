import { ArgData, FieldType } from '../Schema.interface';

export interface FieldProps {
  name: string;
  args: ArgData[];
  type: FieldType;
  description: string;
  setActiveType: (type: string) => void;
}
