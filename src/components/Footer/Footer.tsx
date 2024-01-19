import rss_logo from '@assets/icons/rss-logo.svg';
import github_logo from '@assets/icons/github.svg';
import styles from './Footer.module.scss';
import { useLocalization } from '@src/hooks/useLocalization';

const Footer = () => {
  const { localizationData } = useLocalization();
  const { developers } = localizationData;
  return (
    <footer data-testid="footer">
      <div className={styles.container}>
        <a target="_blank" href="https://rs.school/react/" rel="noreferrer">
          <img src={rss_logo} alt="Rolling Scopes School logo" />
        </a>
        <p className={styles.year}>2024</p>
        <div className={styles.githubs}>
          {developers.map((developer) => (
            <a
              key={developer.github}
              target="_blank"
              href={`https://github.com/${developer.github}`}
              rel="noreferrer"
            >
              <img src={github_logo} alt="Github icon" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
