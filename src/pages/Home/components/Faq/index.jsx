import { PlusCircle } from "phosphor-react";
import FaqImage from "../../../../assets/thanospal.png";

export function Faq() {
  return (
    <div className="mt-[120px]">
      <h1 className="text-3xl font-medium text-[#222] text-center">FAQ</h1>

      <div className="flex flex-col justify-between md:flex-row md:mr-6 mt-8">
        <div className="md:w-[50%] w-[100%]">
          <img src={FaqImage} alt="An apartament" className="w-[100%]" />
        </div>
        <div className="md:ml-8 m-4">
          <h2 className="text-3xl max-w-[600px] text-logo_color-500 font-medium">
            As perguntas mais comuns que recebemos, e que talvez você tambem
            pode tê-las
          </h2>
          <ul className="mt-6">
            <li className="flex items-center text-md font-medium text-logo_color-500 mr-1 mt-3">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="flex items-center text-md font-medium text-logo_color-500 mr-1 mt-3">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="flex items-center text-md font-medium text-logo_color-500 mr-1 mt-3">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="flex items-center text-md font-medium text-logo_color-500 mr-1 mt-3">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="flex items-center text-md font-medium text-logo_color-500 mr-1 mt-3">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="flex items-center text-md font-medium text-logo_color-500 mr-1 mt-3">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="flex items-center text-md font-medium text-logo_color-500 mr-1 mt-3">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
