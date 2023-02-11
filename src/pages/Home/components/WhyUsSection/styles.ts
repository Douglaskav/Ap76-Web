import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100vw;
  min-height: 600px;
  background-color: #3d4244;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 40px;
`;

export const SquaresContainer = styled.div`
  position: relative;
  background-color: red;
  width: 45%;
`;

export const SquareImage = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const InfoContainer = styled.div`
  min-width: 30%;
  max-width: 30%;
  margin-left: 60px;
  margin-right: 60px;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 2.25em;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Paragraph = styled.p`
  color: #d8d8d8;
  font-size: 1.125em;
  line-height: 27px;
  margin-bottom: 30px;
  font-weight: 300;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const CardItemContainer = styled.div`
  padding: 15px;
  width: 230px;
  height: 230px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  margin: 5%;

  @media only screen and (min-width: 1180px) {
    &:nth-child(2) {
      margin-top: -120px;
    }
  }
`;

export const CardItemsRow = styled.div`
  display: flex;
  @media only screen and (max-width: 1180px) {
    flex-direction: column;
  }
`;

export const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;

  background-color: #eafaf1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.h4`
  color: #333333;
  font-size: 1.125em;
  line-height: 21px;
  font-weight: 600;
  margin: 15px 0px 10px 0px;
`;

export const CardText = styled.p`
  color: #aaaaaa;
  font-size: 0.875em;
  line-height: 19px;
`;
