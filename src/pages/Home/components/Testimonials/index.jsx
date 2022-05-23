import PersonImage1 from "../../../../assets/testemunha01.png";
import PersonImage2 from "../../../../assets/testemunha02.png";

export function Testimonials() {
  return (
    <div className="mt-[120px]">
      <h1 className="text-3xl font-medium text-[#222] text-center">
        O que nossos clientes dizem
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center mt-8">
        <div className="bg-primary-700 md:w-1/2 w-[90%] p-6 mb-4 md:m-0 md:ml-12">
          <p className="text-sm text-[#fff]">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado.
          </p>
          <div className="flex items-center mt-6">
            <img src={PersonImage1} alt="Roberta Alvares" />
            <div className="ml-4">
              <h5 className="text-lg text-[#fff] font-medium">
                Roberta Alvares
              </h5>
              <p className="text-sm text-[#d5d5d5]">Gerente de projetos</p>
            </div>
          </div>
        </div>
        <div className="bg-primary-700 md:w-1/2 w-[90%] p-6 md:ml-6 md:mr-12">
          <p className="text-sm text-[#fff]">
            É um fato conhecido de todos que um leitor se distrairá com o
            conteúdo de texto legível de uma página quando estiver examinando
            sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma
            distribuição normal de letras, ao contrário de "Conteúdo aqui,
            conteúdo aqui", fazendo com que ele tenha uma aparência similar a de
            um texto legível.
          </p>
          <div className="flex items-center mt-6">
            <img src={PersonImage2} alt="Carlos Gabriel" />
            <div className="ml-4">
              <h5 className="text-lg text-[#fff] font-medium">
                Carlos Gabriel
              </h5>
              <p className="text-sm text-[#d5d5d5]">Designer de interfaces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
