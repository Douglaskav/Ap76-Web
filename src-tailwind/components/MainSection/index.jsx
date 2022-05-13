import BannerImage from "../../assets/main-section-image.png";

export function MainSection() {
  return (
    <div className="flex">
      <div className="ml-12 mr-4 max-w-[50%] mt-8">
        <h1 className="text-4xl font-medium text-[#222]">Procurar imóveis agora é muito mais fácil e simples.</h1>
        <p className="text-sm text-desc-500 max-w-[90%] mt-3">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor.</p>
      </div>

      <div className="w-[60%] h-[auto]">
        <img src={BannerImage} alt="An builder" />
      </div>
    </div>
  );
}
