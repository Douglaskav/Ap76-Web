import {
  MapPin,
  HouseLine,
  CurrencyDollar,
  MagnifyingGlass,
} from "phosphor-react";
import BannerImage from "../../../../assets/main-section-image.png";
import "./styles.css";

export function MainSection() {
  return (
    <div className="container-main">
      <div className="info-section-container ">
        <h1 className="info-main-title">
          Procurar imóveis agora <br />é muito mais fácil e simples.
        </h1>
        <p className="info-main-desc">
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica
          <br /> e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor.
        </p>

        <div className="inputfield-container">
          <div className="inputfield-buttons-container">
            <button className="btn-alugar">Alugar</button>
            <button className="btn-comprar">Comprar</button>
          </div>
          <div className="form-container">
            <form className="form-section">
              <div className="form-inputs-container">
                <div className="flex">
                  <label>
                    <MapPin size={32} color="#aaa" />
                  </label>
                  <select className="selection-input">
                    <option value="">Select your option</option>
                    <option value="Natal">Natal</option>
                    <option value="Mossoró">Mossoró</option>
                    <option value="Caico">Caico</option>
                  </select>
                </div>

                <div className="separator" />

                <div className="flex">
                  <label>
                    <HouseLine size={32} color="#aaa" />
                  </label>
                  <select className="selection-input">
                    <option value="">Property type</option>
                    <option value="Casa">Casa</option>
                    <option value="Apartamento">Apartamento</option>
                  </select>
                </div>

                <div className="separator" />

                <div className="flex mb-4 md:mb-0">
                  <label>
                    <CurrencyDollar size={32} color="#AAA" />
                  </label>
                  <select className="bg-[#fff] text-desc-700 text-sm">
                    <option value="">Max Price</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="1500">1500</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                    <option value="5000">5000</option>
                  </select>
                </div>
              </div>
              <button className="search-button">
                <MagnifyingGlass size={32} weight="bold" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="image-container">
        <img src={BannerImage} alt="An builder" className="w-[100%]" />
      </div>
    </div>
  );
}
