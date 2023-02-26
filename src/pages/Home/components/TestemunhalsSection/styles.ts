import styled from "styled-components";

export const Container = styled.div``;

export const TestemunhalsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 50px;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const TestemunhalCard = styled.div`
  flex: 1;
  padding: 30px;
  max-width: 40%;
  margin: 0px 20px;
  color: #ffffff;
  background-color: #44ab70;
  @media only screen and (max-width: 1100px) {
    max-width: 100%;
    flex-direction: column;
    margin-top: 20px;

    &:nth-child(1) {
      margin-top: 0px;
    }
  }
`;

export const Comment = styled.p`
  font-size: 0.875em;
  line-height: 21px;
`;

export const AuthorContainer = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
`;

export const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

export const AuthorProfile = styled.div`
  margin-left: 15px;
`;

export const AuthorName = styled.h5`
  font-size: 1.125em;
  font-weight: 500;
`;

export const AuthorJob = styled.span`
  font-size: 0.875em;
  color: #fdfdfd;
`;
