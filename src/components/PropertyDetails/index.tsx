import {
  PropertyDetailsContainer,
  PropertyDetailsItem,
  PropertyDetailsItemText,
} from "./styles";

import { HouseLine, Shower, Car, Ruler } from "phosphor-react";

type IPropertyDetailsProps = {
  bedrooms: number;
  bathrooms: number;
  spaces: number | null;
  area: number | null;
};

export const PropertyDetails = ({
  bedrooms,
  bathrooms,
  spaces,
  area,
}: IPropertyDetailsProps) => {
  return (
    <PropertyDetailsContainer>
      <PropertyDetailsItem>
        <HouseLine size={18} color="#44AB70" weight="duotone" />
        <PropertyDetailsItemText>{bedrooms} Quartos</PropertyDetailsItemText>
      </PropertyDetailsItem>
      <PropertyDetailsItem>
        <Shower size={18} color="#44AB70" weight="duotone" />
        <PropertyDetailsItemText>{bathrooms} Banheiros</PropertyDetailsItemText>
      </PropertyDetailsItem>
      {spaces && (
        <PropertyDetailsItem>
          <Car size={18} color="#44AB70" weight="duotone" />
          <PropertyDetailsItemText>{spaces} Vagas</PropertyDetailsItemText>
        </PropertyDetailsItem>
      )}
      {area && (
        <PropertyDetailsItem>
          <Ruler size={18} color="#44AB70" weight="duotone" />
          <PropertyDetailsItemText>{area} m²</PropertyDetailsItemText>
        </PropertyDetailsItem>
      )}
    </PropertyDetailsContainer>
  );
};
