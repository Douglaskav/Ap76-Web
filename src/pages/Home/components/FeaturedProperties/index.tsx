import { SectionTitle } from "../../../../components/SectionTitle";
import {
  Container,
  PropertiesContainer,
  PropertyCard,
  PropertyHeader,
  PropertyImage,
  PropertyBody,
  PropertyTitle,
  PropertyAddress,
  ButtonContainer
} from "./styles";

import { MapPin } from "phosphor-react";
import PropertyImage01 from "../../../../assets/imo1.png";
import PropertyImage02 from "../../../../assets/imo2.png";
import { PropertyDetails } from "../../../../components/PropertyDetails";
import { SectionButton } from "../../../../components/SectionButton";

export const FeaturedProperties = () => {
  return (
    <Container>
      <SectionTitle>Imóveis em destaque</SectionTitle>
      <PropertiesContainer>
        <PropertyCard>
          <PropertyHeader>
            <PropertyImage src={PropertyImage01} />
          </PropertyHeader>
          <PropertyBody>
            <PropertyTitle>
              Casa à venda com 200m², 4 quartos, 3 vagas e 3 banheiros
            </PropertyTitle>
            <PropertyAddress>
              <MapPin size={18} weight="duotone" />
              Rua Inácio Luís da Costa, Parque São Domingos, São Paulo
            </PropertyAddress>
            <PropertyDetails bedrooms={4} bathrooms={3} spaces={3} area={200} />
          </PropertyBody>
        </PropertyCard>
        <PropertyCard>
          <PropertyHeader>
            <PropertyImage src={PropertyImage02} />
          </PropertyHeader>
          <PropertyBody>
            <PropertyTitle>
              Casa à venda com 200m², 4 quartos, 3 vagas e 3 banheiros
            </PropertyTitle>
            <PropertyAddress>
              <MapPin size={18} weight="duotone" />
              Rua Inácio Luís da Costa, Parque São Domingos, São Paulo
            </PropertyAddress>
            <PropertyDetails bedrooms={4} bathrooms={3} spaces={3} area={200} />
          </PropertyBody>
        </PropertyCard>
      </PropertiesContainer>

      <ButtonContainer>
        <SectionButton color={"#FF902E"}>Ver mais imóveis</SectionButton>
      </ButtonContainer>
    </Container>
  );
};
