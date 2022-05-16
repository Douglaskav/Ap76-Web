import LogoImage from "../../assets/Logo.svg";

export function Header() {
  return (
    <navbar className="flex items-center justify-between mx-12 my-8">
      <div className="flex items-center">
        <img
          src={LogoImage}
          className="w-[36px] h-[36px] mr-3"
          alt="Ap76 Logo"
        />
        <span className="font-medium text-2xl text-logo_color-500">Ap76</span>
      </div>

      <div className="flex items-center">
        <ul className="flex items-center">
          <li className="mr-4">
            <a
              href="/"
              className="text-[0.8125rem] hover:text-secondary-500 transition-colors duration-200"
            >
              Imóveis para comprar
            </a>
          </li>
          <li className="mr-4">
            <a
              href="/"
              className="text-[0.8125rem] hover:text-secondary-500 transition-colors duration-200"
            >
              Imoveis para alugar
            </a>
          </li>
          <li className="mr-4">
            <a
              href="/"
              className="text-[0.8125rem] hover:text-secondary-500 transition-colors duration-200"
            >
              Como funciona
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[0.8125rem] hover:text-secondary-500 transition-colors duration-200"
            >
              FAQ
            </a>
          </li>
        </ul>

        <div className="w-[1px] h-[40px] bg-[#F5F5F5] mx-[18px]" />

        <button className="border border-primary-500 rounded px-4 py-3 text-primary-500 font-bold text-xs mr-4 min-w-[100px] min-h-[40px]">
          Criar Conta
        </button>
        <button className="rounded px-4 py-3 text-[#FFF] font-bold text-xs bg-primary-500 min-w-[100px] min-h-[40px]">
          Login
        </button>
      </div>
    </navbar>
  );
}
