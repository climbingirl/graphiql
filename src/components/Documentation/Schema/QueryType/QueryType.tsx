import { QueryTypeProps } from './QueryType.interface';
import styles from './QueryType.module.scss';

const QueryType = ({ name, setActiveType }: QueryTypeProps) => {
  const onClickHandler = () => {
    setActiveType(name);
  };

  return (
    <p data-testid="queryType" className={styles.query}>
      query: <a onClick={onClickHandler}>{name}</a>
    </p>
  );
};

export default QueryType;
