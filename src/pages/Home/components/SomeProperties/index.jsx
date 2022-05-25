import { CaretLeft, CaretRight } from "phosphor-react";
import { GeralInfoAboutProperty } from "../../../../components/GeralInfoAboutProperty";

export function SomeProperties() {
  return (
    <div className="mt-16 md:mt-[120px] md:mx-12">
      <h1 className="text-3xl mx-2 md:mx-0 md:text-4xl font-medium text-[#222] text-center">
        Algumas propriedades
      </h1>
      <div className="flex flex-col md:flex-row mt-8 mx-4">
        <div className="md:max-w-[45%] md:min-w-[45%]">
          <div className="flex justify-between items-center">
            <div className="flex">
              <button className="w-14 h-14 rounded-full border-2 mr-2 border-primary-500 flex items-center justify-center text-primary-500">
                <CaretLeft size={20} weight="bold" />
              </button>
              <button className="w-14 h-14 rounded-full border-2 ml-2 border-primary-500 flex items-center justify-center text-primary-500">
                <CaretRight size={20} weight="bold" />
              </button>
            </div>

            <h3 className="text-3xl md:text-4xl text-logo_color-500 font-medium">
              01/<span className="text-desc-300 text-2xl md:text-3xl">04</span>
            </h3>
          </div>
          <hr className="my-5" />
          <div className="flex justify-between items-center">
            <span className="text-xs text-desc-500">São Paulo</span>
            <span className="text-xl md:text-2xl text-logo_color-500 font-bold">
              R$ 2,200<span className="text-primary-700 text-lg">/mês</span>
            </span>
          </div>
          <h3 className="text-xl md:text-2xl my-4 font-medium text-logo_color-500">
            Apartamento para alugar com 3 quartos, 120m²
          </h3>
          <p className="text-desc-700 text-xs md:text-sm">
            Rua Inácio Luís da Costa, Parque São Domingos, São Paulo
          </p>
          <GeralInfoAboutProperty
            bedrooms={3}
            bathrooms={2}
            parkingSpot={2}
            size={120}
            compressed
          />

          <button className="w-[100%] md:w-[270px] py-3 px-8 mt-6 bg-transparent border-2 border-primary-700 text-primary-700 font-medium text-center rounded text-sm hover:bg-primary-700 hover:text-[#fff] transition-colors">
            Procurar mais no explorador
          </button>
        </div>

        <div className="flex items-center mt-5 md:ml-5 md:mt-0 overflow-y-hidden">
          <div className="min-w-[400px] h-[400px] rounded border-2 border-[#fff] bg-primary-700" />
          <div className="min-w-[400px] h-[400px] rounded border-2 border-[#fff] bg-primary-700" />
          <div className="min-w-[400px] h-[400px] rounded border-2 border-[#fff] bg-primary-700" />
        </div>
      </div>
    </div>
  );
}
