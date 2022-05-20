import { Header } from "../../components/Header";
import {Map} from "./components/Map";
import {PropertiesFound} from "./components/PropertiesFound";

export function SearchPage() {
  return (
    <div>
      <Header />

      <div className="flex">
      <PropertiesFound />
      <Map />
      </div> 
    </div>
  );
}
