import {
  Container,
  TestemunhalsContainer,
  TestemunhalCard,
  Comment,
  AuthorContainer,
  AuthorImage,
  AuthorJob,
  AuthorName,
  AuthorProfile,
} from "./styles";

import AuthorImage01 from "../../../../assets/testemunha01.png";
import AuthorImage02 from "../../../../assets/testemunha02.png";
import { SectionTitle } from "../../../../components/SectionTitle";

export const TestemunhalsSection = () => {
  return (
    <Container>
      <SectionTitle>O que nossos clientes dizem</SectionTitle>
      <TestemunhalsContainer>
        <TestemunhalCard>
          <Comment>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado.
          </Comment>
          <AuthorContainer>
            <AuthorImage src={AuthorImage01} />
            <AuthorProfile>
              <AuthorName>Roberta Alvares</AuthorName>
              <AuthorJob>Gerente de projetos.</AuthorJob>
            </AuthorProfile>
          </AuthorContainer>
        </TestemunhalCard>

        <TestemunhalCard>
          <Comment>
            É um fato conhecido de todos que um leitor se distrairá com o
            conteúdo de texto legível de uma página quando estiver examinando
            sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma
            distribuição normal de letras, ao contrário de "Conteúdo aqui,
            conteúdo aqui", fazendo com que ele tenha uma aparência similar a de
            um texto legível.
          </Comment>
          <AuthorContainer>
            <AuthorImage src={AuthorImage02} />
            <AuthorProfile>
              <AuthorName>Carlos Gabriel</AuthorName>
              <AuthorJob>Designer de interfaces.</AuthorJob>
            </AuthorProfile>
          </AuthorContainer>
        </TestemunhalCard>
      </TestemunhalsContainer>
    </Container>
  );
};
