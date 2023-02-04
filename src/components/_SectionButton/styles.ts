import styled from "styled-components";

export const Button = styled.button`
  min-width: 270px;
  min-height: 50px;

  background: transparent;
  border: 2px solid #44AB70;
  border-radius: 5px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s;

  color: #44AB70;
  font-size: .875em;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: .03em;

  &:hover {
    background-color: #44AB70;
    color: #ffffff;
  }
`;