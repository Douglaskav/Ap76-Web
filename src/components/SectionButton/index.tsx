import { Button } from "./styles";

type SectionButtonType = {
  children: string;
  color?: string;
};

export const SectionButton = ({ children, color="#44AB70" }: SectionButtonType) => {
  return <Button color={color}>{children}</Button>;
};
