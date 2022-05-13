import { Header } from "./components/Header";
import { HowItWorks } from "./components/HowItWorks";
import { MainSection } from "./components/MainSection";
import { SomeProperties } from "./components/SomeProperties";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <HowItWorks />
      <SomeProperties />
    </div>
  );
}

export default App;
