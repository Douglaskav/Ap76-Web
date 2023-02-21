import { Container } from "./styles";

import { Header } from "../../components/Header";
import {
  MainSection,
  HowItWorksSection,
  SomePropertiesSection,
  WhyUsSection,
  FeaturedProperties
} from "./components";

export const Home = () => {
  return (
    <Container>
      <Header />
      <MainSection />
      <HowItWorksSection />
      <SomePropertiesSection />
      <WhyUsSection />
      <FeaturedProperties />
    </Container>
  );
};
