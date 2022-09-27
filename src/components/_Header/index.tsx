import {
	HeaderContainer,
	LogoContainer,
	LogoTitle,
	LinksContainer,
	Link,
	SignInButton,
	SignUpButton,
	MobileMenu,
} from "./styles";
import LogoImage from "../../assets/Logo.svg";
import { List } from "phosphor-react";

export const Header = () => {
	return (
		<HeaderContainer>
			<LogoContainer>
				<img src={LogoImage} alt="Ap76 Logo" />
				<LogoTitle>Ap76</LogoTitle>
			</LogoContainer>

			<LinksContainer>
				<Link href="/"> Imóveis para comprar</Link>
				<Link href="/"> Imóveis para alugar</Link>
				<Link href="/">Como funciona</Link>
				<Link href="/"> FAQ</Link>

				<SignInButton>Login</SignInButton>
				<SignUpButton>Criar conta</SignUpButton>
			</LinksContainer>

			{/* It will only appear on mobile devices. */}
			<MobileMenu>
				<List size={32} />
			</MobileMenu>
		</HeaderContainer>
	);
};
