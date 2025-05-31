import { Headers, HeaderTextType } from "./HeaderTextType";

const HeaderText = ({ headerSize, text, className }: HeaderTextType) => {
  const HeaderTag = Headers[headerSize] || "h1";

  return <HeaderTag className={className}>{text}</HeaderTag>;
};

export default HeaderText;
