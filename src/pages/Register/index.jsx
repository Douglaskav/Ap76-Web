import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Form } from "./components/Form";
import { Slider } from "../../components/Slider";

export function Register() {
  return (
    <div>
      <Header />
      <div className="flex items-center">
        <Form />
        <Slider />
      </div>
      <Footer />
    </div>
  );
}
