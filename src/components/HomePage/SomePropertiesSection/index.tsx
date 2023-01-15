import { SectionTitle } from "../../_SectionTitle";
import { SectionButton } from "../../_SectionButton";
import {
  Container,
  SectionContainer,
  SectionContainerInfo,
  HeadCardContainer,
  ActionSlideButtonsContainer,
  ActionSlideButton,
  SlidePaginatorContainer,
  CurrentSlide,
  TotalSlide,
  SeparatorLine,
  LocationAndPriceContainer,
  PropertyInfoContainer,
  PropertyTitle,
  PropertyLocation,
  PropertyDetailsContainer,
  PropertyDetailsItem,
  PropertyDetailsItemText,
  CityLabel,
  PriceLabel,
  GreenPriceLabel,
  SectionContainerImages,
  PropertyImage,
} from "./styles";

import {
  Car,
  CaretLeft,
  CaretRight,
  HouseLine,
  MapPin,
  Ruler,
  Shower,
} from "phosphor-react";

import PropertyImage01 from "../../../assets/some-property-01.jpg";
import PropertyImage02 from "../../../assets/some-property-02.jpg";

export const SomePropertiesSection = () => {
  return (
    <Container>
      <SectionTitle>Algumas de nossas propriedades</SectionTitle>
      <SectionContainer>
        <SectionContainerInfo>
          <HeadCardContainer>
            <ActionSlideButtonsContainer>
              <ActionSlideButton>
                <CaretLeft size={16} weight="bold" />
              </ActionSlideButton>
              <ActionSlideButton>
                <CaretRight size={16} weight="bold" />
              </ActionSlideButton>
            </ActionSlideButtonsContainer>

            <SlidePaginatorContainer>
              <CurrentSlide>01/</CurrentSlide>
              <TotalSlide>04</TotalSlide>
            </SlidePaginatorContainer>
          </HeadCardContainer>

          <SeparatorLine />

          <LocationAndPriceContainer>
            <CityLabel>São Paulo</CityLabel>
            <PriceLabel>
              R$ 2,200<GreenPriceLabel>/mês</GreenPriceLabel>
            </PriceLabel>
          </LocationAndPriceContainer>

          <PropertyInfoContainer>
            <PropertyTitle>
              Apartamento para alugar com 3 quartos, 120m²
            </PropertyTitle>
            
            <PropertyLocation>
              <MapPin size={18} weight="duotone" /> Rua Inácio Luís da Costa,
              Parque São Domingos, São Paulo
            </PropertyLocation>

            <PropertyDetailsContainer>
              <PropertyDetailsItem>
                <HouseLine size={18} color="#44AB70" weight="duotone" />
                <PropertyDetailsItemText>3 Quartos</PropertyDetailsItemText>
              </PropertyDetailsItem>
              <PropertyDetailsItem>
                <Shower size={18} color="#44AB70" weight="duotone" />
                <PropertyDetailsItemText>2 Banheiros</PropertyDetailsItemText>
              </PropertyDetailsItem>
              <PropertyDetailsItem>
                <Car size={18} color="#44AB70" weight="duotone" />
                <PropertyDetailsItemText>2 Vagas</PropertyDetailsItemText>
              </PropertyDetailsItem>
              <PropertyDetailsItem>
                <Ruler size={18} color="#44AB70" weight="duotone" />
                <PropertyDetailsItemText>2 Vagas</PropertyDetailsItemText>
              </PropertyDetailsItem>
            </PropertyDetailsContainer>

            <SectionButton>Procurar mais no explorador</SectionButton>
          </PropertyInfoContainer>
        </SectionContainerInfo>

        <SectionContainerImages>
          <PropertyImage src={PropertyImage01} />
          <PropertyImage src={PropertyImage02} />
        </SectionContainerImages>
      </SectionContainer>
    </Container>
  );
};
