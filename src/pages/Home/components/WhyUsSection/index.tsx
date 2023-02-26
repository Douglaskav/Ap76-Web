import { Chat, Funnel, Shield } from "phosphor-react";
import { SectionButton } from "../../../../components/SectionButton";
import {
  SectionContainer,
  Container,
  InfoContainer,
  Title,
  Paragraph,
  CardsContainer,
  CardItemContainer,
  CardItemsRow,
  IconContainer,
  CardTitle,
  CardText,
  SquaresContainer,
  SquareImage,
  SectionButtonContainer,
} from "./styles";

import SquaresImg from "../../../../assets/gray-blocks.png";

export const WhyUsSection = () => {
  return (
    <SectionContainer>
      <Container>
        <InfoContainer>
          <Title>Porque a gente ?</Title>
          <Paragraph>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI.
          </Paragraph>
          <SectionButtonContainer>
            <SectionButton>Procurar mais no explorador</SectionButton>
          </SectionButtonContainer>
        </InfoContainer>
        <CardsContainer>
          <CardItemContainer>
            <IconContainer>
              <Funnel size={28} color="#44AB70"></Funnel>
            </IconContainer>

            <CardTitle>Filtre de acordo com suas preferencas</CardTitle>
            <CardText>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI.
            </CardText>
          </CardItemContainer>
          <CardItemsRow>
            <CardItemContainer>
              <IconContainer>
                <Shield size={28} color="#44AB70"></Shield>
              </IconContainer>

              <CardTitle>Fácil e seguro</CardTitle>
              <CardText>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI.
              </CardText>
            </CardItemContainer>
            <CardItemContainer>
              <IconContainer>
                <Chat size={28} color="#44AB70"></Chat>
              </IconContainer>

              <CardTitle>Chat em real time</CardTitle>
              <CardText>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI.
              </CardText>
            </CardItemContainer>
          </CardItemsRow>
        </CardsContainer>
      </Container>
      <SquaresContainer>
        <SquareImage src={SquaresImg} />
      </SquaresContainer>
    </SectionContainer>
  );
};
