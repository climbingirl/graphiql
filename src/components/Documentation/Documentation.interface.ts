import { SchemaData } from './Schema/Schema.interface';

export interface CacheObject {
  value: SchemaData;
  promise: Promise<SchemaData>;
}
