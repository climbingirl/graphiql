export interface SectionProps {
  classNameHead: string;
  icon: string;
  title: string;
  setActiveType: (type: string) => void;
  children: React.ReactNode;
}
