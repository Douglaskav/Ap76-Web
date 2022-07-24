import { GeralInfoAboutProperty } from "../../../../components/GeralInfoAboutProperty";
import ImovelImage1 from "../../../../assets/imo1.png";
import ImovelImage2 from "../../../../assets/imo2.png";
import "./styles.css";

export function FeaturedProperties() {
  return (
    <div className="container">
      <h1 className="section-title">
        Imóveis em destaque
      </h1>

      <div className="featured-properties-container">
        <div className="featured-properties-item">
          <div>
            <img
              src={ImovelImage1}
              alt="Casa à venda com 200m², 4 quartos, 3 vagas e 3 banheiros"
              className="rounded-t"
            />
          </div>
          <div className="p-4">
            <h4 className="featured-property-title">
              Casa à venda com 200m², 4 quartos, 3 vagas e 3 banheiros
            </h4>
            <p className="featured-property-address">
              Rua Inácio Luís da Costa, Parque São Domingos, São Paulo
            </p>
            <GeralInfoAboutProperty
              bedrooms={4}
              bathrooms={3}
              parkingSpot={3}
              size={200}
             compressed 
            />
          </div>
        </div>

        <div className="featured-properties-item">
          <div>
            <img
              src={ImovelImage2}
              alt="Casa à venda com 200m², 4 quartos, 3 vagas e 3 banheiros"
              className="rounded-t"
            />
          </div>
          <div className="p-4">
            <h4 className="featured-property-title">
              Casa à venda com 200m², 4 quartos, 3 vagas e 3 banheiros
            </h4>
            <p className="featured-property-address">
              Rua Inácio Luís da Costa, Parque São Domingos, São Paulo
            </p>
            <GeralInfoAboutProperty
              bedrooms={4}
              bathrooms={3}
              parkingSpot={3}
              size={200}
              compressed  
            />
          </div>
        </div>
      </div>

      <button className="featured-properties-button">
        Ver mais imóveis
      </button>
    </div>
  );
}
