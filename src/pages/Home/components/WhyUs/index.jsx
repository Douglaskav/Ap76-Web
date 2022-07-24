import { Chat, Funnel, Shield } from "phosphor-react";
import "./styles.css";

export function WhyUs() {
  return (
    <div className="whyus-container">
      <div className="whyus-info-container">
        <h3 className="whyus-title">Por que a gente ?</h3>
        <p className="whyus-desc">
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
        </p>
        <button className="whyus-button">Ver mais sobre nós</button>
      </div>

      <div className="whyus-items-container">
        <ul className="whyus-items-flex">
          <li className="whyus-item">
            <div className="whyus-item-icon-container">
              <Funnel size={26} color="#44AB70" />
            </div>

            <h4 className="whyus-item-title">
              Filtre de acordo com suas preferencas
            </h4>
            <p className="whyus-item-desc">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI.
            </p>
          </li>
          <li className="whyus-item my-6 md:my-0 md:mb-6 mx-6">
            <div className="whyus-item-icon-container">
              <Chat size={26} color="#44AB70" />
            </div>

            <h4 className="whyus-item-title">Chat em real time</h4>
            <p className="whyus-item-desc">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI.
            </p>
          </li>
          <li className="whyus-item">
            <div className="whyus-item-icon-container">
              <Shield size={26} color="#44AB70" />
            </div>

            <h4 className="whyus-item-title">Fácil e seguro</h4>
            <p className="whyus-item-desc">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
