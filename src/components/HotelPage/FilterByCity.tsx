import { useEffect } from "react";
import { useFetch } from "../../hook/useFetch";
import { useAppDispatch } from "../../store/hooks";
import { getHotelsThunk } from "../../store/slices/hotels.slice";

export const FilterByCity = () => {
  const { cities, getCities } = useFetch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/cities`;
    getCities(url);
  }, []);

  const handleClick = (cityId: number | boolean) => {
    const url = `https://hotels-api.academlo.tech/hotels${
      cityId ? `?cityId=${cityId}` : ""
    }`;
    dispatch(getHotelsThunk(url));
  };

  return (
    <article>
      <h3 className="text-center py-5 font-bold">Cities</h3>
      <ul className="space-y-2">
        <li className="hover:p-2 hover:bg-firs-color hover:bg-opacity-60 transition-all duration-75 hover:rounded-md hover:cursor-pointer" onClick={() => handleClick(false)}>All Cities</li>
        {cities?.map((city) => (
          <li className="hover:p-2 hover:bg-firs-color hover:bg-opacity-60 transition-all duration-75 hover:rounded-md hover:cursor-pointer" key={city.id} onClick={() => handleClick(city.id)}>
            {city.name}
          </li>
        ))}
      </ul>
    </article>
  );
};
