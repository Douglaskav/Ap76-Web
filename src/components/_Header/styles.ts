import styled from "styled-components";

export const HeaderContainer = styled.header`
	margin: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 30px;
`;

export const LogoTitle = styled.span`
	color: #333333;
	font-weight: 500;
	font-size: 1.5em;
	margin-left: 10px;
`;

export const LinksContainer = styled.div`
	display: none;
	align-items: center;

	@media only screen and (min-width: 768px) {
		display: flex;
	}
`;

export const Link = styled.a`
	color: #111;
	margin: 0px 10px;
	transition: 0.3s;
	font-size: 0.825em;
	text-decoration: none;

	&:hover {
		color: #ff902e;
	}
`;

export const SignInButton = styled.button`
	cursor: pointer;
	min-width: 120px;
	background: #fff;
	margin: 0px 10px;
	padding: 15px 20px;
	border-radius: 5px;
	border: 1px solid #2ecc71;

	color: #2ecc71;
	font-weight: bold;
	font-size: 0.75em;
`;

export const SignUpButton = styled.button`
	border: none;
	cursor: pointer;
	min-width: 120px;
	padding: 15px 20px;
	border-radius: 5px;
	background: #2ecc71;

	color: #fff;
	font-weight: bold;
	font-size: 0.75em;
`;

export const MobileMenu = styled.div`
	display: flex;

	@media only screen and (min-width: 768px) {
		display: none;
	}
`;
