import LogoImage from "../../assets/Logo.svg";

export function Footer() {
  return (
    <div className="w-[100%] min-h-[320px] bg-[#E5F6EC] mt-[120px] pb-4">
      <div className="flex justify-around p-12">
        <div>
          <div className="flex items-center">
            <img
              src={LogoImage}
              className="w-[36px] h-[36px] mr-3"
              alt="Ap76 Logo"
            />
            <span className="font-medium text-2xl text-logo_color-500">
              Ap76
            </span>
          </div>
          <h4 className="max-w-[300px] text-xl text-logo_color-500 font-medium mt-4">
            Uma nova forma de encontrar o lugar perfeito para você morar.
          </h4>
        </div>

        <div className="flex flex-col md:flex-row md:items-start ml-8">
          <ul className="md:mr-4">
            <h4 className="text-xl font-medium text-logo_color-500">Produto</h4>
            <li className="text-sm font-medium mt-3 text-[#838383]">
              <a href="https://github.com/Douglaskav" alt="home page">
                Inicio
              </a>
            </li>
            <li className="text-sm font-medium mt-3 text-[#838383]">
              <a href="https://www.github.com/Douglaskav" alt="search/house">
                Procurar casa
              </a>
            </li>
            <li className="text-sm font-medium mt-3 text-[#838383]">
              <a href="https://www.github.com/Douglaskav" alt="Search/ap">
                Procurar Ap
              </a>
            </li>
            <li className="text-sm font-medium mt-3 text-[#838383]">
              <a href="https://www.github.com/Douglaskav" alt="about-us">
                Sóbre nós
              </a>
            </li>
          </ul>

          <ul className="md:mx-4">
            <h4 className="text-xl font-medium text-logo_color-500">Empresa</h4>
            <li className="text-sm font-medium mt-3 text-[#838383]">
              <a href="https://www.github.com/Douglaskav" alt="terms">
                Termos de uso
              </a>
            </li>
            <li className="text-sm font-medium mt-3 text-[#838383]">
              <a href="https://www.github.com/Douglaskav" alt="terms of use">
                Politica de uso
              </a>
            </li>
            <li className="text-sm font-medium mt-3 text-[#838383]">
              <a href="https://www.github.com/Douglaskav" alt="carrers">
                Carreiras
              </a>
            </li>
          </ul>

          <ul className="md:ml-4">
            <h4 className="text-xl font-medium text-logo_color-500">Contato</h4>
            <li className="text-sm font-medium mt-3 text-[#838383]">
              <a href="https://www.github.com/Douglaskav" alt="email">
                ap76@contato.com
              </a>
            </li>
            <li className="text-sm font-medium mt-3 text-[#838383]">
              <a href="https://www.github.com/Douglaskav" alt="number">
                +99 9999-9999
              </a>
            </li>
            <li className="text-sm font-medium mt-3 text-[#838383]">
              <a href="https://www.github.com/Douglaskav" alt="address">
                Rua Alfredo Indiano N° 22
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-logo_color-500 text-sm md:text-base">
        Designed and developed by
        <a
          href="https://www.github.com/Douglaskav"
          className="font-bold underline mx-1"
        >
          Me
        </a>
        icons by
        <a
          href="https://www.pixeltrue.com/"
          className="font-bold underline mx-1"
        >
          Pixeltrue
        </a>
      </p>
      <p className="text-center text-sm text-logo_color-500 mx-2 md:mx-0">
        All Rights reserved Douglaskav © 2022
      </p>
    </div>
  );
}
