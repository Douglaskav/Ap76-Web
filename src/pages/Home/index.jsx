import { FeaturedProperties } from "./components/FeaturedProperties";
import { Header } from "../../components/Header";
import { MainSection } from "./components/MainSection";
import { SomeProperties } from "./components/SomeProperties";
import { HowItWorks } from "./components/HowItWorks";
import { WhyUs } from "./components/WhyUs";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <div className="Home">
      <Header />
      <MainSection />
      <HowItWorks />
      <SomeProperties />
      <WhyUs />
      <FeaturedProperties />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
