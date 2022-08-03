import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Form } from "./components/Form";
import { Slider } from "../../components/Slider";

export function ConfirmCodePage() {
  return (
    <div>
      <Header />
      <div className="max-w-[100%] flex items-center">
        <Form />
        <Slider />
      </div>
      <Footer />
    </div>
  );
}
