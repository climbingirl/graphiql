import { FieldType } from '../Schema.interface';
import Arg from './Arg/Arg';
import { FieldProps } from './Field.interface';
import styles from './Field.module.scss';
import Link from './Link/Link';

export const getTypeName = (
  type: FieldType,
  setActiveType: (type: string) => void,
  lastSymbols: string = ''
): JSX.Element => {
  const strategy: Record<string, () => JSX.Element> = {
    LIST: () => (
      <Link
        setActiveType={setActiveType}
        name={type.ofType?.name as string}
        lastSymbols={lastSymbols}
        isList
      />
    ),
    SCALAR: () => (
      <Link setActiveType={setActiveType} name={type.name as string} />
    ),
    NON_NULL: () => {
      if (type.ofType?.kind === 'LIST') {
        return getTypeName(type.ofType, setActiveType, '!');
      } else {
        return (
          <Link
            setActiveType={setActiveType}
            name={type.ofType?.name as string}
            lastSymbols="!"
          />
        );
      }
    },
    DEFAULT: () => (
      <Link setActiveType={setActiveType} name={type.name as string} />
    ),
  };

  const typeHandler = strategy[type.kind] || strategy.DEFAULT;

  return typeHandler();
};

const Field = ({
  name,
  args,
  type,
  description,
  setActiveType,
}: FieldProps) => {
  const updArgs =
    args.length !== 0 ? (
      <ul className={styles.field}>
        (
        {args.map((arg, index) => (
          <Arg
            key={index}
            name={arg.name}
            type={arg.type}
            index={index}
            setActiveType={setActiveType}
          />
        ))}
        )
      </ul>
    ) : null;

  return (
    <li key={name} id={name} data-testid={`field-${name}`}>
      <div>
        {name}
        {updArgs}:{getTypeName(type, setActiveType)}
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  );
};

export default Field;
