import styled from "styled-components";

export const Button = styled.button`
  min-width: 270px;
  min-height: 50px;

  background: transparent;
  border: 2px solid #44ab70;
  border-color: ${(props) => props.color};
  border-radius: 5px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  color: ${(props) => props.color};
  font-size: 0.875em;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0.03em;

  &:hover {
    background-color: ${(props) => props.color};
    color: #ffffff;
  }
`;
