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
  const [filter, setFilter] = useState<boolean>(false);

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
    <main className="flex gap-10 px-10">
      <section
        className={`md:flex md:translate-y-0 md:w-full md:bg-white flex-col max-w-max-content py-3 px-2 md:relative absolute transition-all duration-300 ${
          filter
            ? "translate-y-0 min-h-screen bg-white min-w-[90%] md:min-w-0"
            : " -translate-y-[800px] max-w-full bg-white min-w-[90%] md:min-w-0"
        }`}
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Filter</h2>
          <p onClick={() => setFilter(!filter)} className="md:hidden flex">
            close
          </p>
        </div>
        <FilterPrice setFromTo={setFromTo} />
        <FilterByCity />
      </section>

      <section className="w-full flex flex-col">
        <FilterName
          setNameSearched={setNameSearched}
          filter={filter}
          setFilter={setFilter}
        />
        <div className="flex flex-wrap w-full justify-center">
          {hotels?.filter(cbFilter).map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>
    </main>
  );
};
