import { useState } from 'react';
import { DeveloperCardProps } from './DeveloperCard.interface';
import styles from './DeveloperCard.module.scss';
import clsx from 'clsx';
import CustomButton from '../CustomButton/CustomButton';
import { useLocalization } from '@src/hooks/useLocalization';

const DeveloperCard = ({ developer }: DeveloperCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const { localizationData } = useLocalization();
  const { developerCard } = localizationData;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className={styles.developer}
      id={styles[`${developer.name.split(' ').join('-').toLocaleLowerCase()}`]}
    >
      <div className={styles.photo}>
        <img src={developer.image} alt={developer.name} />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h4>{developer.name}</h4>
          <div className={styles.roles}>
            {developer.roles.map((role: string) => (
              <span className={styles.role} key={`${developer.id}-${role}`}>
                {role}
              </span>
            ))}
          </div>
        </div>
        <CustomButton type="white" size="large" onClick={toggleDetails}>
          {showDetails
            ? developerCard.hideDetailsButton
            : developerCard.showDetailsButton}
        </CustomButton>
        <hr />
        <div
          className={clsx(styles.details, {
            [styles['details-visible']]: showDetails,
          })}
        >
          <div className={styles.biography}>
            <h6>{developerCard.headerBiography}</h6>
            <p>{developer.biography}</p>
          </div>
          <div className={styles.contribution}>
            <h6>{developerCard.headerContribution}</h6>
            <p>{developer.contribution}</p>
          </div>
          <div className={styles.github}>
            <h6>{developerCard.headerGithub}</h6>
            <a
              target="_blank"
              href={`https://github.com/${developer.github}`}
              rel="noreferrer"
            >
              {developer.github}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
