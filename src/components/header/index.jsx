import React from "react";
import "./styles.css";

const Header: React.FC = () => {
	return (
		<header className="navbar-container">
			<div className="navbar-image-container">
				<img src="./assets/Logo.svg" alt="Ap76 Logo" />
				<span>Ap76</span>
			</div>

			<nav className="navbar-right-block">
				<ul>
					<li className="navbar-link">
						<a href="https://github.com/douglaskav">Imóveis para comprar</a>
					</li>
					<li className="navbar-link">
						<a href="https://github.com/douglaskav">Imoveis para alugar</a>
					</li>
					<li className="navbar-link">
						<a href="https://github.com/douglaskav">Como funciona</a>
					</li>
					<li className="navbar-link">
						<a href="https://github.com/douglaskav">FAQ</a>
					</li>
				</ul>

				<hr className="navbar-separator" />
				<button className="navbar-button1 mr-15">Criar Conta</button>
				<button className="navbar-button2">Login</button>
			</nav>
		</header>
	);
};

export default Header;
