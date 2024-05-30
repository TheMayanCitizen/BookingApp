import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHotelsThunk } from "../store/slices/hotels.slice";
import { HotelCard } from "../components/HotelPage/HotelCard";
import { FilterByCity } from "../components/HotelPage/FilterByCity";
import { FilterName } from "../components/HotelPage/FilterName";
import { Hotel } from "../hook/types/Hotel.types";
import { FilterPrice } from "../components/HotelPage/FilterPrice";
import type { PriceRange } from "./types/HomePage.types";

export const HomePage = () => {
  const [nameSearched, setNameSearched] = useState<string>("");
  const [fromTo, setFromTo] = useState<PriceRange>({
    from: 0,
    to: Infinity,
  });
  const hotels = useAppSelector((state) => state.hotels);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels`;
    dispatch(getHotelsThunk(url));
  }, []);

  const cbFilter = (hotel: Hotel) => {
    const filterName = hotel.name.toLowerCase().includes(nameSearched);
    const price = Number(hotel.price);
    const filterByPrice = price >= fromTo.from && price <= fromTo.to;
    return filterName && filterByPrice;
  };
  return (
    <div>
      <FilterName setNameSearched={setNameSearched} />
      <section>
        <FilterPrice setFromTo={setFromTo} />
      </section>
      <FilterByCity />
      <div>
        {hotels?.filter(cbFilter).map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};
