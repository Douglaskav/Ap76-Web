import { Home } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ConfirmCodePage } from "./pages/ConfirmCodePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/otp" element={<ConfirmCodePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
