import {
  MapPin,
  HouseLine,
  CurrencyDollar,
  MagnifyingGlass,
} from "phosphor-react";
import BannerImage from "../../../../assets/main-section-image.png";

export function MainSection() {
  return (
    <div className="flex flex-col md:flex-row flex-col-reverse text-center md:text-justify">
      <div className="mx-4 md:ml-12 md:mr-4 md:max-w-[50%] mt-8">
        <h1 className="text-3xl md:text-4xl font-medium text-[#222]">
          Procurar imóveis agora é muito mais fácil e simples.
        </h1>
        <p className="mx-4 md:mx-0 text-sm text-desc-500 md:max-w-[90%] mt-3">
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor.
        </p>

        <div className="mt-16">
          <div>
            <button className="bg-[#efe] w-32 px-4 rounded-tl">Comprar</button>
            <button className="bg-primary-500 w-32 px-4 rounded-tr text-white">
              Alugar
            </button>
          </div>
          <div className="flex shadow-md w-[60%] absolute bg-white py-4 rounded-lg">
            <form className="flex items-center justify-between w-[100%] mx-4">
            <div className="flex">
            <div className="flex">
                <label>
                  <MapPin size={32} color="#aaa" />
                </label>
                <select className="bg-[#fff] text-desc-700 text-sm">
                  <option value="">Select your option</option>
                  <option>Natal</option>
                  <option>Mossoró</option>
                  <option>Caico</option>
                </select>
              </div>

              <div className="w-[1px] h-8 bg-desc-700 mx-4 rounded" />

              <div className="flex">
                <label>
                  <HouseLine size={32} color="#aaa" />
                </label>
                <select className="bg-[#fff] text-desc-700 text-sm">
                  <option value="">Property type</option>
                  <option>Natal</option>
                  <option>Mossoró</option>
                  <option>Caico</option>
                </select>
              </div>

              <div className="w-[1px] h-8 bg-desc-700 mx-4 rounded" />

              <div className="flex">
                <label>
                  <CurrencyDollar size={32} color="#AAA" />
                </label>
                <select className="bg-[#fff] text-desc-700 text-sm">
                  <option value="">Max Price</option>
                  <option>Natal</option>
                  <option>Mossoró</option>
                  <option>Caico</option>
                </select>
              </div>

            </div>
              <button className="w-12 h-12 rounded bg-primary-500 text-white flex justify-center items-center p-4">
                <MagnifyingGlass size={32} weight="bold" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-[100%] mt-[-10px] md:mt-0 md:w-[60%] h-[auto]">
        <img src={BannerImage} alt="An builder" />
      </div>
    </div>
  );
}
