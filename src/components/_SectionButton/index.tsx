import { Button } from "./styles";

type SectionButton = {
  children: string;
};

export const SectionButton = ({ children }: SectionButton) => {
  return <Button>{children}</Button>;
};
