import {
  CaretLeft,
  CaretRight,
  MapPin,
  Bed,
  Bathtub,
  Car,
  Ruler,
} from "phosphor-react";

export function SomeProperties() {
  return (
    <div className="mt-[120px] mx-12">
      <h1 className="text-4xl font-medium text-[#222] text-center">
        Algumas propriedades
      </h1>
      <div className="flex mt-8">
        <div className="max-w-[45%] min-w-[45%]">
          <div className="flex justify-between items-center">
            <div className="flex ">
              <button className="w-14 h-14 rounded-full border-2 mr-2 border-primary-500 flex items-center justify-center text-primary-500">
                <CaretLeft size={20} weight="bold" />
              </button>
              <button className="w-14 h-14 rounded-full border-2 ml-2 border-primary-500 flex items-center justify-center text-primary-500">
                <CaretRight size={20} weight="bold" />
              </button>
            </div>

            <h3 className="text-4xl text-logo_color-500 font-medium">
              01/<span className="text-desc-300 text-3xl">04</span>
            </h3>
          </div>
          <hr className="my-5" />
          <div className="flex justify-between items-center">
            <span className="text-xs text-desc-500">São Paulo</span>
            <span className="text-2xl text-logo_color-400 font-bold">
              R$ 2,200<span className="text-primary-700 text-lg">/mês</span>
            </span>
          </div>
          <h3 className="text-2xl my-4 font-medium text-logo_color-500">
            Apartamento para alugar com 3 quartos, 120m²
          </h3>
          <div className="flex">
            <MapPin size={20} color="#aaa" />
            <p className="ml-1 text-desc-700 text-sm">
              Rua Inácio Luís da Costa, Parque São Domingos, São Paulo
            </p>
          </div>
          <div className="flex items-center mt-4">
            <span className="flex items-center text-xs text-primary-700 font-medium mr-5">
              <Bed size={16} weight="bold" className="mr-1" />3 Quartos
            </span>
            <span className="flex items-center text-xs text-primary-700 font-medium mr-5">
              <Bathtub size={16} weight="bold" className="mr-1" />2 Banheiros
            </span>
            <span className="flex items-center text-xs text-primary-700 font-medium mr-5">
              <Car size={16} weight="bold" className="mr-1" />2 Vagas
            </span>
            <span className="flex items-center text-xs text-primary-700 font-medium mr-5">
              <Ruler size={16} weight="bold" className="mr-1" /> 120 m²
            </span>
          </div>

          <button className="py-3 px-8 mt-6 bg-transparent border-2 border-primary-700 text-primary-700 font-medium text-center rounded text-sm">
            Procurar mais no explorador
          </button>
        </div>

        <div className="flex items-center ml-4 overflow-y-hidden">
          <div className="min-w-[400px] h-[400px] rounded border-2 border-[#fff] bg-primary-700" />
          <div className="min-w-[400px] h-[400px] rounded border-2 border-[#fff] bg-primary-700" />
          <div className="min-w-[400px] h-[400px] rounded border-2 border-[#fff] bg-primary-700" />
        </div>
      </div>
    </div>
  );
}
