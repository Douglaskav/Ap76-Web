import { SectionTitle } from "../../../../components/SectionTitle";
import { SectionButton } from "../../../../components/SectionButton";
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
  SearchInExplorerButtonContainer,
  CityLabel,
  PriceLabel,
  GreenPriceLabel,
  SectionContainerImages,
  PropertyImage,
} from "./styles";

import { PropertyDetails } from "../../../../components/PropertyDetails";

import { CaretLeft, CaretRight, MapPin } from "phosphor-react";
import PropertyImage01 from "../../../../assets/some-property-01.jpg";
import PropertyImage02 from "../../../../assets/some-property-02.jpg";

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
              Apartamento para alugar com 3 quartos e dois banheiros, area de
              120m²
            </PropertyTitle>

            <PropertyLocation>
              <MapPin size={18} weight="duotone" /> Rua Inácio Luís da Costa,
              Parque São Domingos, São Paulo
            </PropertyLocation>

            <PropertyDetails bedrooms={4} bathrooms={3} spaces={3} area={200} />

            <SearchInExplorerButtonContainer>
              <SectionButton>Procurar mais no explorador</SectionButton>
            </SearchInExplorerButtonContainer>
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
