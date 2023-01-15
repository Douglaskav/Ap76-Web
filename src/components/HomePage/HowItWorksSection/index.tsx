import { SectionTitle } from "../../_SectionTitle";
import {
	Container,
	NumberContainer,
	SectionContainer,
	SectionItemsContainer,
	SectionItem,
	NumberText,
	SectionBody,
	TitleBody,
	DescriptionBody,
	LinkBody,
	Link,
} from "./styles";

export const HowItWorksSection = () => {
	return (
		<Container>
			<SectionTitle>Como isso funciona?</SectionTitle>
			<SectionContainer>
				<SectionItemsContainer>
					<SectionItem>
						<NumberContainer>
							<NumberText>1</NumberText>
						</NumberContainer>

						<SectionBody>
							<TitleBody>Procure pela casa/apartarmento</TitleBody>
							<DescriptionBody>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								labore et dolore magna aliqua.
							</DescriptionBody>
							<LinkBody>
								<Link>Ver mais</Link>
							</LinkBody>
						</SectionBody>
					</SectionItem>

					<SectionItem>
						<NumberContainer>
							<NumberText>2</NumberText>
						</NumberContainer>

						<SectionBody>
							<TitleBody>Escolha a propriedade perfeita para você</TitleBody>
							<DescriptionBody>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								labore et dolore magna aliqua.
							</DescriptionBody>
							<LinkBody>
								<Link>Ver mais</Link>
							</LinkBody>
						</SectionBody>
					</SectionItem>

					<SectionItem>
						<NumberContainer>
							<NumberText>3</NumberText>
						</NumberContainer>

						<SectionBody>
							<TitleBody>Marque uma visita no imóvel</TitleBody>
							<DescriptionBody>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								labore et dolore magna aliqua.
							</DescriptionBody>
							<LinkBody>
								<Link>Ver mais</Link>
							</LinkBody>
						</SectionBody>
					</SectionItem>
				</SectionItemsContainer>
			</SectionContainer>
		</Container>
	);
};
