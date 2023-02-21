import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PropertiesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const PropertyCard = styled.div`
  margin: 50px 20px 40px 20px;
  width: 50%;
  max-width: 560px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(51, 51, 51, 0.15);
  cursor: pointer;
`;

export const PropertyHeader = styled.div`
  width: 100%;
`;

export const PropertyImage = styled.img`
  border-radius: 15px 15px 0px 0px;
  width: 100%;
`;

export const PropertyBody = styled.div`
  padding: 30px;
`;

export const PropertyTitle = styled.h4`
  color: #333;
  font-size: 1.125em;
  font-weight: 500;
  line-height: 21px;
`;

export const PropertyAddress = styled.p`
  margin: 15px 0px;
  color: #aaa;
  font-size: 0.875em;
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  max-width: 30%;
  min-width: 24%;
`;