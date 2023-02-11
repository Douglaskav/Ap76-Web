import { Container } from "./styles";

import { Header } from "../../components/_Header";
import {
  MainSection,
  HowItWorksSection,
  SomePropertiesSection,
  WhyUsSection,
} from "./components";

export const Home = () => {
  return (
    <Container>
      <Header />
      <MainSection />
      <HowItWorksSection />
      <SomePropertiesSection />
      <WhyUsSection />
    </Container>
  );
};
