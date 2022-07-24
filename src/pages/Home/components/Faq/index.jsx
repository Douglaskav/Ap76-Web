import { PlusCircle } from "phosphor-react";
import FaqImage from "../../../../assets/thanospal.png";
import "./styles.css";

export function Faq() {
  return (
    <div className="container">
      <h1 className="section-title">FAQ</h1>

      <div className="faq-container">
        <div className="faq-image-container">
          <img src={FaqImage} alt="An apartament" className="w-[100%]" />
        </div>
        <div className="faq-info-container">
          <h2 className="faq-info-title">
            As perguntas mais comuns que recebemos, e que talvez você tambem
            pode tê-las
          </h2>
          <ul className="mt-6">
            <li className="faq-info-item">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="faq-info-item">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="faq-info-item">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="faq-info-item">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="faq-info-item">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="faq-info-item">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
            <li className="faq-info-item">
              Qual primeiro passo para comprar/alugar um imóvel ?
              <PlusCircle size={32} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
