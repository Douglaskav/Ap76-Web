import { Funnel } from "phosphor-react";
import { PropertyFindItem } from "./PropertyFindItem";

export function PropertiesFound() {
  return (
    <div className="w-[100%] md:w-[60%] md:h-[60vh] md:ml-12 md:mr-4 mx-4 md:mx-0">
      <div className="flex items-center justify-between mx-4 md:mx-0 mt-4">
        <span className="text-xs md:text-sm text-logo_color-500 font-medium">
          Procurar Imóveis &gt; &nbsp;
          <span className="text-desc-300">Natal - RN</span>
        </span>

        <button className="flex items-center justify-center bg-primary-500 p-3 md:px-14 rounded text-white font-medium hover:bg-primary-700 transition-colors">
          <Funnel size={24} weight="bold" className="mr-2" /> Filtrar Imóveis
        </button>
      </div>

      <div className="flex items-center flex-wrap justify-between mt-3 md:max-h-[75vh] overflow-y-scroll w-[100%]">
        <PropertyFindItem />
        <PropertyFindItem />
        <PropertyFindItem />
        <PropertyFindItem />
      </div>
    </div>
  );
}
