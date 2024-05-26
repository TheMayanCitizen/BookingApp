import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHotelsThunk } from "../store/slices/hotels.slice";
import { HotelCard } from "../components/HotelPage/HotelCard";
import "./styles/HomePage.css";

export const HomePage = () => {
  const hotels = useAppSelector((state) => state.hotels);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels`;
    dispatch(getHotelsThunk(url));
  }, []);

  return (
    <div>
      <div className="cards__container">
        {hotels?.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};