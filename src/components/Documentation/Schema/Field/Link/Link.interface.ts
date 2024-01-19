export interface LinkProps {
  name: string;
  setActiveType: (type: string) => void;
  lastSymbols?: string;
  isList?: boolean;
}
