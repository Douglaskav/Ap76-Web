import { Header } from "../../components/Header";
import { Form } from "./components/Form";
import { Slider } from "./components/Slider";

export function Login() {
  return (
    <div>
      <Header />
      <div className="flex items-center">
        <Form />
        <Slider />
      </div>
    </div>
  );
}
