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
      <h4>Cities</h4>
      <ul>
        <li onClick={() => handleClick(false)}>All Cities</li>
        {cities?.map((city) => (
          <li key={city.id} onClick={() => handleClick(city.id)}>
            {city.name}
          </li>
        ))}
      </ul>
    </article>
  );
};
