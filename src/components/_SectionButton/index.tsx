import { Button, Text } from "./styles";

type SectionButton = {
  children: string;
};

export const SectionButton = ({ children }: SectionButton) => {
  return (
    <Button>
      <Text>{children}</Text>
    </Button>
  );
};
