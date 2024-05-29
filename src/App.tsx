import { Route, Routes } from "react-router-dom";
import { HomePage, HotelIdPage,Login, ProtectedRoutes, RegisterPage, ReservationPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel/:id" element={<HotelIdPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/reservation" element={<ReservationPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
