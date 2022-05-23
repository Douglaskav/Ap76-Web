import BannerImage from "../../../../assets/main-section-image.png";

export function MainSection() {
  return (
    <div className="flex flex-col md:flex-row flex-col-reverse text-center md:text-justify">
      <div className="mx-4 md:ml-12 md:mr-4 md:max-w-[50%] mt-8">
        <h1 className="text-3xl md:text-4xl font-medium text-[#222]">Procurar imóveis agora é muito mais fácil e simples.</h1>
        <p className="mx-4 md:mx-0 text-sm text-desc-500 md:max-w-[90%] mt-3">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor.</p>
      </div>

      <div className="w-[100%] mt-[-10px] md:mt-0 md:w-[60%] h-[auto]">
        <img src={BannerImage} alt="An builder" />
      </div>
    </div>
  );
}
