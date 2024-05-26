import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHotelsThunk } from "../store/slices/hotels.slice";

export const HomePage = () => {
  const hotels = useAppSelector((state) => state.hotels);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels`;
    dispatch(getHotelsThunk(url));
  }, []);

  console.log(hotels);

  return <div>HomePage</div>;
};
