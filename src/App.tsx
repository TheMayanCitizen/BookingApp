import { Route, Routes } from "react-router-dom";
import { HomePage, HotelIdPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel/:id" element={<HotelIdPage />} />
      </Routes>
    </div>
  );
}

export default App;
