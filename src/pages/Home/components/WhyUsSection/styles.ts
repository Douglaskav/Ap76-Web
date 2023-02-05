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
  margin-bottom: 30px;

  &:nth-child(2) {
    margin-left: 45%;
    margin-top: -20%;
  }


 &:nth-child(3) {
    margin-top: -20%;
  }

`;

export const IconContainer = styled.div``;

export const CardTitle = styled.h4``;

export const CardText = styled.p``;
