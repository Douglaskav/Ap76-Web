import Header from "../../components/header";
import "./styles.css";

import Logo from "../../assets/Logo.svg";
import mapPinIcon from "../../assets/map-pin.svg";
import homeIcon from "../../assets/home.svg";
import dolarSignIcon from "../../assets/dollar-sign.svg";
import builderImage from "../../assets/main-section-image.png";
import searchIcon from "../../assets/search.svg";
import arrowLeftIcon from "../../assets/arrow-left.svg";
import chevronLeftIcon from "../../assets/chevron-left.svg";
import chevronRightIcon from "../../assets/chevron-right.svg";
import propertyImage1 from "../../assets/some-property-01.png";
import propertyImage2 from "../../assets/some-property-02.png";
import mapPin2Icon from "../../assets/map-pin-2.svg";
import bedIcon from "../../assets/bed-1.svg";
import rulerIcon from "../../assets/ruler-1.svg";
import carIcon from "../../assets/car-1.svg";
import showerIcon from "../../assets/shower-1.svg";
import filterIcon from "../../assets/filter.svg";
import messageSquareIcon from "../../assets/message-square.svg";
import shieldIcon from "../../assets/shield.svg";
import Imo01Image from "../../assets/imo1.png";
import Imo02Image from "../../assets/imo2.png";
import Testemunha01Image from "../../assets/testemunha01.png";
import Testemunha02Image from "../../assets/testemunha02.png";
import faqIcon from "../../assets/faq.svg";
import faqIconActive from "../../assets/faq-active.svg";
import faqBannerImage from "../../assets/thanospal.png";

const Home = () => (
	<div>
		<Header />
		<main>
			<section className="main-section-container">
				<div className="info-input">
					<h1>Procurar imóveis agora é muito mais fácil e simples.</h1>
					<p>
						Lorem Ipsum é simplesmente uma simulação de texto da indústria
						tipográfica e de impressos, e vem sendo utilizado desde o século
						XVI, quando um impressor.
					</p>
					<div className="input-search-container">
						<ul className="input-search-items-container">
							<li className="input-search-item">
								<img src={mapPinIcon} alt="Map pin" />
								<select className="select">
									<option>Rio de Janeiro</option>
									<option>São Paulo</option>
									<option>Natal</option>
									<option>Caico</option>
								</select>
							</li>

							<hr className="input-search-item-separator" />
							<li className="input-search-item">
								<img src={homeIcon} alt="House icon" />
								<select className="select">
									<option>Apartamento</option>
									<option>Casa</option>
								</select>
							</li>

							<hr className="input-search-item-separator" />
							<li className="input-search-item">
								<img src={dolarSignIcon} alt="Dollar Sign" />
								<select className="select">
									<option>R$ 500</option>
									<option>R$ 1000</option>
									<option>R$ 1500</option>
									<option>R$ 2000</option>
									<option>R$ 3000</option>
									<option>R$ 5000</option>
								</select>
							</li>
						</ul>
						<button className="input-search-button">
							<img src={searchIcon} alt="search button" />
						</button>
					</div>
				</div>

				<div className="banner-image">
					<img src={builderImage} alt="A builder" />
				</div>
			</section>
		</main>

		<section className="how-it-works-container">
			<div className="how-it-works">
				<h1 className="textCenter">Como isto funciona ?</h1>
				<ul className="how-it-works-items-block">
					<li className="how-it-works-item">
						<div className="step step-1">
							<h5>1</h5>
						</div>
						<h4>Procure pela casa/apartarmento</h4>
						<p>
							Lorem Ipsum é simplesmente uma simulação de texto da indústria
							tipográfica e de impressos, e vem sendo utilizado desde o século
							XVI.
						</p>
						<a href="http://localhost:3000">
							Ver mais
							<img src={arrowLeftIcon} alt="arrow left" />
						</a>
					</li>
					<li className="how-it-works-item">
						<div className="step step-2">
							<h5>2</h5>
						</div>
						<h4>Escolha a propriedade perfeita para você</h4>
						<p>
							Lorem Ipsum é simplesmente uma simulação de texto da indústria
							tipográfica e de impressos, e vem sendo utilizado desde o século
							XVI.
						</p>
						<a href="http://localhost:3000">
							Ver mais
							<img src={arrowLeftIcon} alt="arrow left" />
						</a>
					</li>
					<li className="how-it-works-item">
						<div className="step step-3">
							<h5>3</h5>
						</div>
						<h4>Marque uma visita no imóvel</h4>
						<p>
							Lorem Ipsum é simplesmente uma simulação de texto da indústria
							tipográfica e de impressos, e vem sendo utilizado desde o século
							XVI.
						</p>
						<a href="http://localhost:3000">
							Ver mais
							<img src={arrowLeftIcon} alt="arrow left icon" />
						</a>
					</li>
				</ul>
			</div>
		</section>

		<section className="some-properties-container">
			<h1 className="textCenter">Algumas de nossas propriedades</h1>
			<div className="some-properties">
				<div className="properties-info">
					<div className="properties-info-header">
						<div className="properties-info-buttons">
							<button className="properties-info-sidechange">
								<img src={chevronLeftIcon} alt="Go back" />
							</button>
							<button className="properties-info-sidechange">
								<img src={chevronRightIcon} alt="Forward" />
							</button>
						</div>

						<div className="properties-info-number">
							<h4>01/</h4>
							<h5>04</h5>
						</div>
					</div>
					<hr />

					<div className="city-and-price">
						<span className="city">São Paulo</span>
						<h4 className="price">
							R$ 2,200<span>/mês</span>
						</h4>
					</div>

					<h3 className="some-properties-title">
						Apartamento para alugar com 3 quartos, 120m²
					</h3>
					<span className="some-properties-address">
						<img src={mapPin2Icon} alt="Map Pin" />
						Rua Inácio Luís da Costa, Parque São Domingos, São Paulo
					</span>

					<ul className="some-properties-info">
						<li className="some-properties-info-item">
							<img src={bedIcon} alt="bed icon" />
							<span>3 Quartos</span>
						</li>

						<li className="some-properties-info-item">
							<img src={showerIcon} alt="shower icon" />
							<span>2 Banheiros</span>
						</li>

						<li className="some-properties-info-item">
							<img src={carIcon} alt="car icon" />
							<span>1 Vaga</span>
						</li>

						<li className="some-properties-info-item">
							<img src={rulerIcon} alt="ruler icon" />
							<span>120 m²</span>
						</li>
					</ul>

					<button className="some-properties-button">
						Procurar mais no explorador
					</button>
				</div>

				<div className="some-properties-images">
					<img src={propertyImage1} alt="Property 1" />
					<img src={propertyImage2} alt="Property 2" />
				</div>
			</div>
		</section>

		<section className="why-us-container">
			<div className="why-us">
				<div className="why-us-left-block">
					<h3>Por que a gente ?</h3>
					<p>
						Lorem Ipsum é simplesmente uma simulação de texto da indústria
						tipográfica e de impressos, e vem sendo utilizado desde o século
						XVI.
					</p>
					<button>Ver mais sobre nós</button>
				</div>

				<div className="why-us-right-block">
					<ul className="why-us-items">
						<div>
							<li className="why-us-item">
								<div className="icon-bg">
									<img src={filterIcon} alt="filter icon" />
								</div>
								<h5>Filtre de acordo com suas preferencas.</h5>
								<p>
									Lorem Ipsum é simplesmente uma simulação de texto da indústria
									tipográfica e de impressos, e vem sendo utilizado desde o
									século XVI.
								</p>
							</li>

							<li className="why-us-item">
								<div className="icon-bg">
									<img src={messageSquareIcon} alt="message square icon" />
								</div>
								<h5>Chat em real time.</h5>
								<p>
									Lorem Ipsum é simplesmente uma simulação de texto da indústria
									tipográfica e de impressos, e vem sendo utilizado desde o
									século XVI.
								</p>
							</li>
						</div>
						<li className="why-us-item">
							<div className="icon-bg">
								<img src={shieldIcon} alt="Shield icon" />
							</div>
							<h5>Fácil e seguro</h5>
							<p>
								Lorem Ipsum é simplesmente uma simulação de texto da indústria
								tipográfica e de impressos, e vem sendo utilizado desde o século
								XVI.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section className="featured-properties-container">
			<h1 className="textCenter">Imóveis em destaque</h1>

			<div className="featured-properties">
				<div className="featured-properties-item">
					<img src={Imo01Image} alt="Imóvel 01" />
					<div className="featured-properties-info">
						<h4>Casa à venda com 200m², 4 quartos, 3 vagas e 3 banheiros</h4>
						<span className="some-properties-address">
							Rua Inácio Luís da Costa, Parque São Domingos, São Paulo
						</span>

						<ul className="some-properties-info">
							<li className="some-properties-info-item">
								<img src={bedIcon} alt="bed icon" />
								<span>4 Quartos</span>
							</li>

							<li className="some-properties-info-item">
								<img src={showerIcon} alt="shower icon" />
								<span>3 Banheiros</span>
							</li>

							<li className="some-properties-info-item">
								<img src={carIcon} alt="car icon" />
								<span>3 Vaga</span>
							</li>

							<li className="some-properties-info-item">
								<img src={rulerIcon} alt="ruler icon" />
								<span>200 m²</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="featured-properties-item">
					<img src={Imo02Image} alt="Imagem de imóvel" />
					<div className="featured-properties-info">
						<h4>Apartamento para alugar com 2 quartos 1 vaga e 1 banheiro</h4>
						<span className="some-properties-address">
							Rua Inácio Luís da Costa, Parque São Domingos, São Paulo
						</span>

						<ul className="some-properties-info">
							<li className="some-properties-info-item">
								<img src={bedIcon} alt="bed icon" />
								<span>2 Quartos</span>
							</li>

							<li className="some-properties-info-item">
								<img src={showerIcon} alt="shower icon" />
								<span>1 Banheiros</span>
							</li>

							<li className="some-properties-info-item">
								<img src={carIcon} alt="car icon" />
								<span>1 Vaga</span>
							</li>

							<li className="some-properties-info-item">
								<img src={rulerIcon} alt="ruler icon" />
								<span>60 m²</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="featured-properties-button-container">
				<button className="featured-properties-button">Ver mais imóveis</button>
			</div>
		</section>

		<section className="our-clients-container">
			<h1 className="textCenter">O que nossos clientes dizem</h1>
			<div className="our-clients">
				<ul className="witness">
					<li className="witness-item">
						<p>
							Lorem Ipsum é simplesmente uma simulação de texto da indústria
							tipográfica e de impressos, e vem sendo utilizado desde o século
							XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
							os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
							sobreviveu não só a cinco séculos, como também ao salto para a
							editoração eletrônica, permanecendo essencialmente inalterado.
						</p>
						<div>
							<div className="witness-item-person">
								<img src={Testemunha01Image} alt="Roberta Alves" />
								<div>
									<h5>Roberta Alves</h5>
									<span>Gerente de projetos.</span>
								</div>
							</div>
						</div>
					</li>
					<li className="witness-item">
						<p>
							É um fato conhecido de todos que um leitor se distrairá com o
							conteúdo de texto legível de uma página quando estiver examinando
							sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma
							distribuição normal de letras, ao contrário de "Conteúdo aqui,
							conteúdo aqui", fazendo com que ele tenha uma aparência similar a
							de um texto legível.
						</p>
						<div>
							<div className="witness-item-person">
								<img src={Testemunha02Image} alt="Carlos Gabriel" />
								<div>
									<h5>Carlos Gabriel</h5>
									<span>Designer de interfaces.</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>

		<section className="faq-container">
			<h1 className="textCenter">FAQ</h1>
			<div className="faq">
				<img src={faqBannerImage} alt="FAQ banner" />

				<div className="faq-content">
					<h2>
						As perguntas mais comuns que recebemos, e que talvez você tambem
						pode tê-las
					</h2>
					<ul className="faq-content-questions-block">
						<li className="faq-content-question">
							<div>
								<h5>Qual primeiro passo para comprar/alugar um imóvel ?</h5>
								<img src={faqIcon} alt="Open question" />
							</div>
						</li>

						<li className="faq-content-question">
							<div className="active">
								<h5>
									Vocês conseguem me ajudar a vender ou colocar para alugar meu
									apartamento ?
								</h5>
								<img src={faqIconActive} alt="Close question" />
							</div>
							<p>
								Existem muitas variações disponíveis de passagens de Lorem
								Ipsum, mas a maioria sofreu algum tipo de alteração, seja por
								inserção de passagens com humor, ou palavras aleatórias que não
								parecem nem um pouco convincentes.
							</p>
						</li>

						<li className="faq-content-question">
							<div>
								<h5>
									Quanto tempo leva para eu conseguir comprar uma propriedade
								</h5>
								<img src={faqIcon} alt="Open question" />
							</div>
						</li>

						<li className="faq-content-question">
							<div>
								<h5>Eu consigo dividir o valor junto com outro amigo ?</h5>
								<img src={faqIcon} alt="Open question" />
							</div>
						</li>
						<li className="faq-content-question">
							<div>
								<h5>Quanto que vou ter de pagar pelo serviço de vocês ?</h5>
								<img src={faqIcon} alt="Open question" />
							</div>
						</li>

						<li className="faq-content-question">
							<div>
								<h5>
									Se caso for alugado como que eu consigo fazer alterações no
									imóvel ?
								</h5>
								<img src={faqIcon} alt="Open question" />
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<footer>
			<div className="body-footer-container">
				<div className="footer-image">
					<div className="navbar-image-container">
						<img src={Logo} alt="Ap76 Logo" />
						<span>Ap76</span>
					</div>
					<p>Uma nova forma de encontrar o lugar perfeito para você morar.</p>
				</div>
				<div className="footer-links-container">
					<nav className="footer-links-item">
						<h4>Produto</h4>
						<li>
							<a href="http://localhost:3000">Inicio</a>
						</li>
						<li>
							<a href="http://localhost:3000">Procurar casa</a>
						</li>
						<li>
							<a href="http://localhost:3000">Procurar Ap</a>
						</li>
						<li>
							<a href="http://localhost:3000">About us</a>
						</li>
					</nav>

					<nav className="footer-links-item">
						<h4>Empresa</h4>
						<li>
							<a href="http://localhost:3000">Termos de uso</a>
						</li>
						<li>
							<a href="http://localhost:3000">Politica de uso</a>
						</li>
						<li>
							<a href="http://localhost:3000">Carreiras</a>
						</li>
					</nav>

					<nav className="footer-links-item">
						<h4>Contato</h4>
						<li>
							<a href="http://localhost:3000">ap76@contato.com</a>
						</li>
						<li>
							<a href="http://localhost:3000">+99 9999-9999</a>
						</li>
						<li>
							<a href="http://localhost:3000">Rua Alfredo Indiano N° 22</a>
						</li>
					</nav>
				</div>
			</div>

			<div className="copy-text-container">
				<span className="copy-text">
					Todos os direitos autorais reservados © - 2022
				</span>
			</div>
		</footer>
	</div>
);

export default Home;
