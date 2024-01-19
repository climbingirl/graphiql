import rss_logo from '@assets/icons/rss-logo.svg';
import sloth from '@assets/images/sloth.png';
import styles from './EducationalProgram.module.scss';
import { useLocalization } from '@src/hooks/useLocalization';

const EducationalProgram = () => {
  const { localizationData } = useLocalization();
  const { educationalProgram } = localizationData;
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>{educationalProgram.header}</h3>
        {educationalProgram.paragraphs.map((item, index) => (
          <p key={`paragraph_${index}`}>{item}</p>
        ))}
        <div className={styles['rss-logo']}>
          <a target="_blank" href="https://rs.school/react/" rel="noreferrer">
            {' '}
            <img src={rss_logo} alt="Rolling Scopes School logo" />
          </a>
        </div>
      </div>
      <div className={styles.image}>
        <img src={sloth} alt="Sloth" />
      </div>
    </div>
  );
};

export default EducationalProgram;
