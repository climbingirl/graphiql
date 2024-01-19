import { TypeProps } from './Type.interface';
import styles from './Type.module.scss';

const Type = ({ name, description }: TypeProps) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>{name}</h5>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Type;
