import { GeralInfoAboutProperty } from "../../../../components/GeralInfoAboutProperty";
import ImovelImage1 from "../../../../assets/imo1.png";

export function PropertyFindItem() {
  return (
    <div className="w-[100%] md:w-[47%] min-h-[400px] border rounded m-2">
      <div className="w-[100%]">
        <img src={ImovelImage1} alt="Imóvel" className="w-[100%] rounded-t" />
      </div>
      <div className="m-5">
      <div className="flex justify-between items-center ">
        <span className="text-xs text-desc-500">São Paulo</span>
        <span className="text-sm text-logo_color-500 font-bold">
          R$ 2,200<span className="text-primary-700 text-xs">/mês</span>
        </span>
      </div>

      <h4 className="text-sm text-logo_color-500 font-medium mt-3">Rua Inácio Luís da Costa, Parque São Domingos, N° 34, São Paulo</h4>
        <GeralInfoAboutProperty bathrooms={2} bedrooms={3} parkingSpot={2} size={200} compressed={true} />
      </div>
    </div>
  );
}
