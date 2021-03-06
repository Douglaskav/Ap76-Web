import { useState } from "react";

import { List, XCircle } from "phosphor-react";
import LogoImage from "../../assets/Logo.svg";

export function Header() {
  const [menuHamburgerIsOpen, setMenuHamburgerIsOpen] = useState(false);

  function handleMenuHamburger() {
    setMenuHamburgerIsOpen(!menuHamburgerIsOpen);
  }

  return (
    <>
      <header className="flex items-center justify-between md:mx-12 mx-6 my-8">
        <a href="http://localhost:3000/" className="flex items-center">
          <img
            src={LogoImage}
            className="w-[36px] h-[36px] mr-3"
            alt="Ap76 Logo"
          />
          <span className="font-medium text-2xl text-logo_color-500">Ap76</span>
        </a>

        <div className="hidden md:flex items-center">
          <ul className="flex items-center">
            <li className="mr-4">
              <a
                href="http://localhost:3000/search"
                className="text-[0.8125rem] hover:text-secondary-500 transition-colors duration-200"
              >
                Imóveis para comprar
              </a>
            </li>
            <li className="mr-4">
              <a
                href="http://localhost:3000/search"
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

          <a href="/register">
            <button className="border border-primary-500 rounded px-4 py-3 text-primary-500 font-bold text-xs mr-4 min-w-[100px] min-h-[40px]">
              Criar Conta
            </button>
          </a>
          <a href="http://localhost:3000/login">
            <button className="rounded px-4 py-3 text-[#FFF] font-bold text-xs bg-primary-500 min-w-[100px] min-h-[40px]">
              Login
            </button>
          </a>
        </div>

        {/* MOBILE ONLY */}
        <div
          className="visible md:hidden cursor-pointer"
          onClick={handleMenuHamburger}
        >
          <List size={32} />
        </div>
      </header>

      {menuHamburgerIsOpen ? (
        <div className="fixed bg-white min-w-[100vw] min-h-[100vh] w-[100%] h-100%] overflow-y-scroll top-0">
          <nav className="flex flex-col items-center justify-center">
            <button
              onClick={handleMenuHamburger}
              className="absolute right-6 top-6"
            >
              <XCircle size={32} />
            </button>

            <a href="http://localhost:3000/" className="flex items-center mt-6">
              <img
                src={LogoImage}
                className="w-[36px] h-[36px] mr-3"
                alt="Ap76 Logo"
              />
              <span className="font-medium text-2xl text-logo_color-500">
                Ap76
              </span>
            </a>

            <ul className="text-center mt-6">
              <li className="border-b my-4">
                <a href="/">Home</a>
              </li>
              <li className="border-b my-4">
                <a href="/search">Imóveis para comprar</a>
              </li>
              <li className="border-b my-4">
                <a href="/search">Imóveis para alugar</a>
              </li>
              <li className="border-b my-4">
                <a href="/#howitworks">Como funciona</a>
              </li>
              <li className="border-b my-4">
                <a href="/#faq">FAQ</a>
              </li>
              <a href="/register">
                <button className="border border-primary-500 rounded px-4 py-3 text-primary-500 font-bold text-xs mr-4 min-w-[100px] w-[100%] min-h-[40px]">
                  Criar Conta
                </button>
              </a>
              <a href="http://localhost:3000/login">
                <button className="rounded px-4 py-3 text-[#FFF] font-bold text-xs bg-primary-500 min-w-[100px] w-[100%] min-h-[40px] mt-4">
                  Login
                </button>
              </a>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </>
  );
}
