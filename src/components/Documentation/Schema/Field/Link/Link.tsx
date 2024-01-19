import { LinkProps } from './Link.interface';
import styles from './Link.module.scss';

const Link = ({
  name,
  setActiveType,
  lastSymbols = '',
  isList = false,
}: LinkProps) => {
  const handleOnClick = () => {
    setActiveType(name);
  };

  if (isList) lastSymbols = ']' + lastSymbols;

  return (
    <a onClick={handleOnClick}>
      {isList && <span className={styles.additional}>[</span>}
      {`${name}`}
      {lastSymbols.length !== 0 && (
        <span className={styles.additional}>{lastSymbols}</span>
      )}
    </a>
  );
};

export default Link;
