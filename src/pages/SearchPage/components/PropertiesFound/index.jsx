import { Funnel } from "phosphor-react";
import { PropertyFindItem } from "./PropertyFindItem";

export function PropertiesFound() {
  return (
    <div className="w-[60%] h-[60vh] ml-12 mr-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-logo_color-500 font-medium">
          Procurar Imóveis &gt; &nbsp;
          <span className="text-desc-300">Natal - RN</span>
        </span>

        <button className="flex items-center justify-center bg-primary-500 p-3 px-14 rounded text-white font-medium hover:bg-primary-700 transition-colors">
          <Funnel size={24} weight="bold" className="mr-2" /> Filtrar Imóveis
        </button>
      </div>

      <div className="flex items-center flex-wrap justify-between mt-3 max-h-[75vh] overflow-y-scroll">
        <PropertyFindItem />
        <PropertyFindItem />
        <PropertyFindItem />
        <PropertyFindItem />
      </div>
    </div>
  );
}
