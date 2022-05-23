import { Chat, Funnel, Shield } from "phosphor-react";

export function WhyUs() {
  return (
    <div className="w-[100%] min-h-[700px] flex flex-col md:flex-row md:justify-between bg-[#3D4244] mt-[120px] pb-10">
      <div className="mt-20 md:ml-16 text-center md:text-justify">
        <h3 className="text-3xl font-medium text-[#fff]">Por que a gente ?</h3>
        <p className="md:max-w-sm mt-3 font-light text-md text-[#D8D8D8]">
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI.
        </p>
        <button className="min-w-[270px] py-3 px-8 mt-6 bg-transparent border-2 border-primary-700 text-primary-700 font-medium text-center rounded text-sm hover:bg-primary-700 hover:text-[#fff] transition-colors">
          Ver mais sobre nós
        </button>
      </div>

      <div className="mt-20 md:mr-20 flex items-center md:items-start justify-center md:justify-base">
        <ul className="flex items-center md:items-start justify-center md:justify-base flex-wrap">
          <div>
            <li className="w-[230px] h-[230px] rounded-2xl bg-[#fff] p-4 mb-6 md:mr-6">
              <div className="rounded w-[46px] h-[46px] bg-[#EAFAF1] flex justify-center items-center">
                <Funnel size={26} color="#44AB70" />
              </div>

              <h4 className="text-lg text-logo_color-500 font-medium mt-3">
                Filtre de acordo com suas preferencas
              </h4>
              <p className="text-xs text-desc-700">
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI.
              </p>
            </li>
            <li className="w-[230px] h-[230px] rounded-2xl bg-[#fff] p-4">
              <div className="rounded w-[46px] h-[46px] bg-[#EAFAF1] flex justify-center items-center">
                <Chat size={26} color="#44AB70" />
              </div>

              <h4 className="text-lg text-logo_color-500 font-medium mt-3">
                Chat em real time
              </h4>
              <p className="text-xs text-desc-700">
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI.
              </p>
            </li>
            <li className="w-[230px] h-[230px] rounded-2xl bg-[#fff] p-4 md:hidden mt-6">
              <div className="rounded w-[46px] h-[46px] bg-[#EAFAF1] flex justify-center items-center">
                <Shield size={26} color="#44AB70" />
              </div>

              <h4 className="text-lg text-logo_color-500 font-medium mt-3">
                Fácil e seguro
              </h4>
              <p className="text-xs text-desc-700">
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI.
              </p>
            </li>
          </div>
          {/* Desktop Only */}
          <li className="w-[230px] h-[230px] rounded-2xl bg-[#fff] p-4 md:mt-[100px] mt-6 invisible md:visible">
            <div className="rounded w-[46px] h-[46px] bg-[#EAFAF1] flex justify-center items-center">
              <Shield size={26} color="#44AB70" />
            </div>

            <h4 className="text-lg text-logo_color-500 font-medium mt-3">
              Fácil e seguro
            </h4>
            <p className="text-xs text-desc-700">
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
