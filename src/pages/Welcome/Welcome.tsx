import EducationalProgram from '@src/components/EducationalProgram/EducationalProgram';
import AboutProject from '@src/components/AboutProject/AboutProject';
import styles from './Welcome.module.scss';
import DeveloperCard from '@src/components/DeveloperCard/DeveloperCard';
import { useLocalization } from '@src/hooks/useLocalization';
import { Developer } from '@src/components/DeveloperCard/DeveloperCard.interface';

const WelcomePage = () => {
  const { localizationData } = useLocalization();
  const { welcomePage, developers } = localizationData;
  return (
    <div className={styles.container}>
      <h1>{welcomePage.headerWelcomePage}</h1>
      <EducationalProgram />
      <AboutProject />
      <div className={styles.team}>
        <h3>{welcomePage.headerOurTeam}</h3>
        <div className={styles.developers}>
          {developers.map((developer: Developer) => (
            <DeveloperCard key={developer.id} developer={developer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
