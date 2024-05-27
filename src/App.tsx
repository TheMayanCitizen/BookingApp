import { Route, Routes } from "react-router-dom";

import { HomePage, HotelIdPage } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel/:id" element={<HotelIdPage />} />
      </Routes>
    </div>
  );
}

export default App;
