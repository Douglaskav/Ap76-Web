import { Container } from "./styles";

import { Header } from "../../components/_Header";
import { MainSection, HowItWorksSection } from "../../components/HomePage";

export const Home = () => {
	return (
		<Container>
			<Header />
			<MainSection />
			<HowItWorksSection />
		</Container>
	);
};
