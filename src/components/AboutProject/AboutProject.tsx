import { useLocalization } from '@src/hooks/useLocalization';
import styles from './AboutProject.module.scss';

const AboutProject = () => {
  const { localizationData } = useLocalization();
  const { aboutProject } = localizationData;
  return (
    <div className={styles.container}>
      <h3>{aboutProject.header}</h3>
      <p>
        {aboutProject.paragraphs[0]}{' '}
        <a
          target="_blank"
          href={
            'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md'
          }
          rel="noreferrer"
        >
          {aboutProject.taskLink}
        </a>{' '}
        {aboutProject.paragraphs[1]}{' '}
      </p>
      {aboutProject.paragraphs
        .filter((_, index) => index > 1)
        .map((item, index) => (
          <p key={index + item.length}>{item}</p>
        ))}
    </div>
  );
};

export default AboutProject;
