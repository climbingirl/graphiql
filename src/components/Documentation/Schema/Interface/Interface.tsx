import { InterfaceProps } from './Interface.interface';

const Interface = ({ name, setActiveType }: InterfaceProps) => {
  const onClickHandler = () => {
    setActiveType(name);
  };

  return <a onClick={onClickHandler}>{name}</a>;
};

export default Interface;
