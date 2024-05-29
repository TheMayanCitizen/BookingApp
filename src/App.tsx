import { Route, Routes } from "react-router-dom";
import { HomePage, HotelIdPage,Login, RegisterPage, ReservationPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel/:id" element={<HotelIdPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/reservation" element={<ReservationPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </div>
  );
}

export default App;
