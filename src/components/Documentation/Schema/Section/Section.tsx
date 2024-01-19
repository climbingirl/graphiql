import { SectionProps } from './Section.interface';

const Section = ({ classNameHead, icon, title, children }: SectionProps) => {
  return (
    <>
      <div className={classNameHead}>
        <img src={icon} alt={title} />
        {title}
      </div>
      {children}
    </>
  );
};

export default Section;
