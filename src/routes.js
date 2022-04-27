import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SearchPage />} path="/search" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
