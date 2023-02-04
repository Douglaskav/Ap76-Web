import {
	MainSectionContainer,
	InfoContainer,
	MainTitle,
	MainSubtitle,
	FormContainer,
	InputFieldContainer,
	FieldGroup,
	InputText,
	InputButton,
	ImageContainer,
	MainImg,
} from "./styles";

import { MapPinLine, HouseLine, Money } from "phosphor-react";

import MainImage from "../../../../assets/main-section-image.png";

export const MainSection = () => {
	return (
		<MainSectionContainer>
			<InfoContainer>
				<MainTitle>
					Procurar imóveis agora é muito mais fácil e simples.
				</MainTitle>
				<MainSubtitle>
					Lorem Ipsum é simplesmente uma simulação de texto da indústria
					tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
					quando um impressor.
				</MainSubtitle>

				<FormContainer>
					<InputFieldContainer>
						<FieldGroup>
							<InputText placeholder="Localização" />
							<MapPinLine size={24} color="#aaaaaa" />
						</FieldGroup>

						<FieldGroup>
							<InputText placeholder="Propriedade" />
							<HouseLine size={24} color="#aaaaaa" />
						</FieldGroup>

						<FieldGroup>
							<InputText placeholder="Preço Maximo" />
							<Money size={24} color="#aaaaaa" />
						</FieldGroup>
					</InputFieldContainer>
					<InputButton>Pesquisar</InputButton>
				</FormContainer>
			</InfoContainer>

			<ImageContainer>
				<MainImg src={MainImage} />
			</ImageContainer>
		</MainSectionContainer>
	);
};
