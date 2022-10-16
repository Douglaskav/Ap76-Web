import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: #222222;
  font-size: 3em;
  line-height: 60px;
  font-weight: 500;
  margin-left: 30px;

  
	@media only screen and (min-width: 768px) {
    margin-left: 0px;
  }
`;

type SectionTitle = {
  children: string;
};

export const SectionTitle = ({ children }: SectionTitle) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
};
