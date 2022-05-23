import { GeralInfoAboutProperty } from "../../../../components/GeralInfoAboutProperty";
import ImovelImage1 from "../../../../assets/imo1.png";
import ImovelImage2 from "../../../../assets/imo2.png";

export function FeaturedProperties() {
  return (
    <div className="mt-[120px] flex flex-col items-center">
      <h1 className="text-3xl font-medium text-[#222] text-center">
        Imóveis em destaque
      </h1>

      <div className="w-full flex flex-col md:flex-row flex-nowrap items-center justify-center">
        <div className="border rounded md:w-[38%] md:mr-6 m-8">
          <div>
            <img
              src={ImovelImage1}
              alt="Casa à venda com 200m², 4 quartos, 3 vagas e 3 banheiros"
              className="rounded-t"
            />
          </div>
          <div className="p-4">
            <h4 className="text-lg mb-1 font-medium text-logo_color-500">
              Casa à venda com 200m², 4 quartos, 3 vagas e 3 banheiros
            </h4>
            <p className="text-desc-700 text-sm">
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

        <div className="border rounded md:w-[38%] md:ml-6 m-8">
          <div>
            <img
              src={ImovelImage2}
              alt="Casa à venda com 200m², 4 quartos, 3 vagas e 3 banheiros"
              className="rounded-t"
            />
          </div>
          <div className="p-4">
            <h4 className="text-lg mb-1 font-medium text-logo_color-500">
              Casa à venda com 200m², 4 quartos, 3 vagas e 3 banheiros
            </h4>
            <p className="text-desc-700 text-sm">
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

      <button className="min-w-[270px] py-3 px-8 mt-6 bg-transparent border-2 border-secondary-300 text-secondary-300 font-medium text-center rounded text-sm hover:bg-secondary-300 hover:text-[#fff] transition-colors">
        Ver mais imóveis
      </button>
    </div>
  );
}
