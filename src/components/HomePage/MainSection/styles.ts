import styled from "styled-components";

export const MainSectionContainer = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	margin-top: 30px;
	flex-direction: column-reverse;

	@media only screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const InfoContainer = styled.div`
	flex: 1;
	margin: 30px;
	min-width: 50%;

	@media only screen and (min-width: 768px) {
		margin: 60px 20px 50px 60px;
	}
`;

export const MainTitle = styled.h1`
	font-family: "Poppins", sans-serif;
	font-weight: 600;
	max-width: 640px;
	font-size: 2.5em;
	line-height: 60px;
	color: #222;
`;

export const MainSubtitle = styled.p`
	color: #333333;
	max-width: 600px;
	font-size: 1em;
	margin-top: 20px;
	line-height: 31px;
	letter-spacing: 0.03em;
`;

export const InputFieldContainer = styled.form`
	width: 100%;
	display: flex;
	z-index: 99;
	flex-direction: column;
	margin-top: 30px;

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		margin-top: 40px;
	}
`;

export const FieldGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	min-height: 50px;
	padding-left: 10px;
	padding-right: 10px;
	border: 1px solid #aaaaaa;
	border-radius: 5px;
	box-sizing: border-box;
	&:nth-child(2) {
		margin: 5px 0px;
	}

	@media only screen and (min-width: 768px) {
		&:nth-child(2) {
			margin: 0px 10px;
		}
	}
`;

export const InputText = styled.input`
	height: 100%;
	border-radius: 5px;
	border: none;
	color: #222;
	font-size: 0.75em;
	font-family: "Poppins", sans-serif;

	&::placeholder {
		color: #000;
		font-weight: 600;
	}

	&:focus {
		outline: none;
	}

	@media only screen and (min-width: 768px) {
		max-width: 150px;
	}
`;

export const InputButton = styled.button`
	cursor: pointer;
	width: 100%;
	height: 50px;
	background-color: #333;
	border: none;
	border-radius: 5px;
	color: #fff;
	font-weight: 600;
	font-size: 0.75em;
	box-sizing: border-box;
	padding: 10px;
	transition: 0.3s;
	margin-top: 10px;

	&:hover {
		background-color: #111;
	}
`;

export const ImageContainer = styled.div`
	right: 0;
`;

export const MainImg = styled.img`
	width: 100%;
`;
