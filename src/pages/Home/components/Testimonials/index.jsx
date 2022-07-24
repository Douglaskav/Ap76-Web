import PersonImage1 from "../../../../assets/testemunha01.png";
import PersonImage2 from "../../../../assets/testemunha02.png";
import "./styles.css";

export function Testimonials() {
  return (
    <div className="container">
      <h1 className="section-title">O que nossos clientes dizem</h1>

      <div className="testimonials-container">
        <div className="testimonials-item">
          <p className="testimonials-info-text">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado.
          </p>
          <div className="testimonials-person-container">
            <img src={PersonImage1} alt="Roberta Alvares" />
            <div className="ml-4">
              <h5 className="person-name">Roberta Alvares</h5>
              <p className="person-prof">Gerente de projetos</p>
            </div>
          </div>
        </div>

        <div className="testimonials-item">
          <p className="testimonials-info-text">
            É um fato conhecido de todos que um leitor se distrairá com o
            conteúdo de texto legível de uma página quando estiver examinando
            sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma
            distribuição normal de letras, ao contrário de "Conteúdo aqui,
            conteúdo aqui", fazendo com que ele tenha uma aparência similar a de
            um texto legível.
          </p>
          <div className="testimonials-person-container">
            <img src={PersonImage2} alt="Carlos Gabriel" />
            <div className="ml-4">
              <h5 className="person-name">Carlos Gabriel</h5>
              <p className="person-prof">Designer de interfaces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
