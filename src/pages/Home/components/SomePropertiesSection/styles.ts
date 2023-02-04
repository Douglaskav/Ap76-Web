import styled from "styled-components";

export const Container = styled.div``;

export const SectionContainer = styled.div`
  width: 100vw;
  display: flex;
`;

export const SectionContainerInfo = styled.div`
  min-width: 40%;
  height: 100vh;
  margin: 30px;
  margin-left: 60px;
`;

export const HeadCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionSlideButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActionSlideButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 100px;
  border: 2px solid #2ecc71;
  background: transparent;
  color: #2ecc71;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
  margin: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #2ecc71;
    color: #fff;
  }
`;

export const SlidePaginatorContainer = styled.div`
  display: flex;
`;

export const CurrentSlide = styled.h3`
  font-size: 3em;
  color: #616161;
  font-weight: 500;
`;

export const TotalSlide = styled.h4`
  font-size: 2.25em;
  color: #979797;
  font-weight: 500;
`;

export const SeparatorLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  border: none;
  margin: 20px 0px;
`;

export const LocationAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PropertyInfoContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const PropertyTitle = styled.h2`
  color: #333;
  font-size: 1.5em;
  line-height: 36px;
  font-weight: 600;
`;

export const PropertyLocation = styled.h4`
  color: #aaa;
  font-size: 0.875em;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

export const PropertyDetailsContainer = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;

export const PropertyDetailsItem = styled.li`
  display: flex;
  margin: 0px 8px;

  &:first-child {
    margin-left: 0px;
  }
`;

export const PropertyDetailsItemText = styled.p`
  margin-left: 5px;
  font-size: 0.75em;
  color: #44ab70;
  font-weight: 500;
`;

export const SearchInExplorerButtonContainer = styled.div`
  width: 80%;
`;

export const CityLabel = styled.span`
  color: #aaa;
  font-size: 0.75em;
  font-weight: 500;
`;

export const PriceLabel = styled.h3`
  color: #616161;
  font-size: 1.5em;
`;

export const GreenPriceLabel = styled.span`
  font-size: 1em;
  color: #44ab70;
`;

export const SectionContainerImages = styled.div`
  margin-top: 30px;
  display: flex;
  overflow-x: hidden;
`;

export const PropertyImage = styled.img`
  width: 450px;
  height: 450px;
  margin: 0px 15px;
  border-radius: 5px;
`;
