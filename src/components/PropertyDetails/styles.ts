import styled from "styled-components";

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
