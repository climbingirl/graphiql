import CustomButton from '../../CustomButton/CustomButton';
import { ButtonLangProps } from './ButtonsLang.interface';
import clsx from 'clsx';
import { languagesBtns } from '../../../constants/translate';
import styles from './ButtonsLang.module.scss';
import { useLocalization } from '@src/hooks/useLocalization';

const ButtonLang = ({ children, active, onChangeLang }: ButtonLangProps) => (
  <span className={clsx({ [styles.btn_active]: active })}>
    <CustomButton
      type="transparent"
      size="small"
      active={active}
      onClick={onChangeLang}
    >
      {children}
    </CustomButton>
  </span>
);

const ButtonsLang = () => {
  const { activeLang, setActiveLang } = useLocalization();
  return (
    <div className={styles.btns_lang}>
      {languagesBtns.map((l) => (
        <ButtonLang
          active={l.lang === activeLang}
          onChangeLang={() => setActiveLang(l.lang)}
          key={l.lang}
        >
          <img className={styles.btn_img} src={l.img} alt={l.lang} />
          {l.lang}
        </ButtonLang>
      ))}
    </div>
  );
};

export default ButtonsLang;
