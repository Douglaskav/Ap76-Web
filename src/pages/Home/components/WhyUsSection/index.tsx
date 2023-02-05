import { Funnel } from "phosphor-react";
import { SectionButton } from "../../../../components/_SectionButton";
import {
  SectionContainer,
  Container,
  InfoContainer,
  Title,
  Paragraph,
  CardsContainer,
  CardItemContainer,
  IconContainer,
  CardTitle,
  CardText,
} from "./styles";

export const WhyUsSection = () => {
  return (
    <SectionContainer>
      <Container>
      <InfoContainer>
        <Title>Porque a gente ?</Title>
        <Paragraph>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
        </Paragraph>
        <SectionButton>Procurar mais no explorador</SectionButton>
      </InfoContainer>
      <CardsContainer>
        <CardItemContainer>
          <IconContainer>
            <Funnel size={32} color="#44AB70"></Funnel>
          </IconContainer>

          <CardTitle>Filtre de acordo com suas preferencas</CardTitle>
          <CardText>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI.
          </CardText>
        </CardItemContainer>
        <CardItemContainer>
          <IconContainer>
            <Funnel size={32} color="#44AB70"></Funnel>
          </IconContainer>

          <CardTitle>Filtre de acordo com suas preferencas</CardTitle>
          <CardText>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI.
          </CardText>
        </CardItemContainer>
        <CardItemContainer>
          <IconContainer>
            <Funnel size={32} color="#44AB70"></Funnel>
          </IconContainer>

          <CardTitle>Filtre de acordo com suas preferencas</CardTitle>
          <CardText>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI.
          </CardText>
        </CardItemContainer>
      </CardsContainer>
      </Container>
    </SectionContainer>
  );
};
