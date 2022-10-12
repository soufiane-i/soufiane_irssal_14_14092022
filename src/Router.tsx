import { Routes, Route, BrowserRouter } from "react-router-dom";
import CurrentEmployees from "./Components/CurrentEmployees/CurrentEmployees";
import HomePage from "./Components/HomePage/HomePage";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employee-list" element={<CurrentEmployees />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
