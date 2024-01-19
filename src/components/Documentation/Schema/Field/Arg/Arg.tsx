import { ArgProps } from './Arg.interface';
import styles from './Arg.module.scss';

const Arg = ({ name, type, index, setActiveType }: ArgProps) => {
  return (
    <li key={index}>
      {name}:
      {type.name ? (
        <a onClick={() => setActiveType(type.name)}>{type.name}</a>
      ) : (
        <span className={styles['no-data']}>No data</span>
      )}
    </li>
  );
};

export default Arg;
