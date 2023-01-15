import { Container } from "./styles";

import { Header } from "../../components/_Header";
import { MainSection, HowItWorksSection, SomePropertiesSection } from "../../components/HomePage";

export const Home = () => {
	return (
		<Container>
			<Header />
			<MainSection />
			<HowItWorksSection />
			<SomePropertiesSection />
		</Container>
	);
};
