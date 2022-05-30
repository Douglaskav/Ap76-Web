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

        <div className="my-8 md:mb-0 md:mt-16 flex items-center justify-center flex-col md:block">
          <div class="flex items-center w-[100%]">
            <button className="bg-green-600 w-[100%] md:w-32 p-2 md:p-0 md:px-4 rounded-tl text-white">Comprar</button>
            <button className="bg-primary-500 w-[100%] md:w-32 p-2 md:p-0 md:px-4 rounded-tr text-white">
              Alugar
            </button>
          </div>
          <div className="flex border md:border-0 md:shadow-md w-[100%] md:w-[60%] md:absolute bg-white pt-4 md:py-4 md:rounded-b-lg md:rounded-tr-lg">
            <form className="flex flex-col md:flex-row md:items-center md:justify-between w-[100%] md:mx-4">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex">
                  <label>
                    <MapPin size={32} color="#aaa" />
                  </label>
                  <select className="bg-[#fff] text-desc-700 text-sm">
                    <option value="">Select your option</option>
                    <option value="Natal">Natal</option>
                    <option value="Mossoró">Mossoró</option>
                    <option value="Caico">Caico</option>
                  </select>
                </div>

                <div className="w-[100%] h-[1px] md:w-[1px] md:h-8 bg-desc-700 mx-4 my-4 md:my-0 rounded" />

                <div className="flex">
                  <label>
                    <HouseLine size={32} color="#aaa" />
                  </label>
                  <select className="bg-[#fff] text-desc-700 text-sm">
                    <option value="">Property type</option>
                    <option value="Casa">Casa</option>
                    <option value="Apartamento">Apartamento</option>
                  </select>
                </div>

                <div className="w-[100%] h-[1px] md:w-[1px] md:h-8 bg-desc-700 mx-4 my-4 md:my-0 rounded" />

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
              <button className="md:w-12 w-[100%] h-12 rounded bg-primary-500 text-white flex justify-center items-center p-4">
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
