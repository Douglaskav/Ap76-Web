import { CaretLeft, CaretRight } from "phosphor-react";
import { GeralInfoAboutProperty } from "../../../../components/GeralInfoAboutProperty";
import "./styles.css";

export function SomeProperties() {
  return (
    <div className="mt-16 md:mt-32 md:mx-12">
      <h1 className="section-title">
        Algumas propriedades
      </h1>
      <div className="some-properties-container">
        <div className="some-properties-info">
          <div className="some-properties-info-header">
            <div className="flex">
              <button className="some-properties-header-info-button">
                <CaretLeft size={20} weight="bold" />
              </button>
              <button className="some-properties-header-info-button">
                <CaretRight size={20} weight="bold" />
              </button>
            </div>

            <h3 className="some-properties-number-one">
              01/<span className="some-properties-number-two">04</span>
            </h3>
          </div>
          <hr className="my-5"/>
          <div className="some-properties-city-and-value">
            <span className="city">São Paulo</span>
            <span className="value">
              R$ 2,200<span className="month">/mês</span>
            </span>
          </div>
          <h3 className="some-properties-title">
            Apartamento para alugar com 3 quartos, 120m²
          </h3>
          <p className="some-properties-address">
            Rua Inácio Luís da Costa, Parque São Domingos, São Paulo
          </p>
          <GeralInfoAboutProperty
            bedrooms={3}
            bathrooms={2}
            parkingSpot={2}
            size={120}
            compressed
          />

          <button className="some-properties-info-button">
            Procurar mais no explorador
          </button>
        </div>

        <div className="flex items-center mt-5 md:ml-5 md:mt-0 overflow-y-hidden">
          <div className="image" />
          <div className="image" />
          <div className="image" />
        </div>
      </div>
    </div>
  );
}
