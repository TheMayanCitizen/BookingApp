import { Fragment, useEffect } from "react";
import { City } from "../../hook/types/Hotel.types"
import { useFetch } from "../../hook/useFetch";
import { HotelCard } from "../HotelPage/HotelCard";

interface Props {
  city : City,
  id : number | undefined,
}

export function OtherHotels({city, id}:Props) {
  const {getHotels, prueba} = useFetch();

  useEffect(() => {
    if (city) {
      const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`;
      getHotels(url);
    }
  }, [city]);



  return (

    <Fragment>
       <section >
        <h3 >Other Hotels in <span >{city?.country }</span></h3>
        <div >
            {
             prueba?.filter(hotel => hotel.id !== id).map( hotel => (
                <HotelCard 
                    key={hotel.id}
                    hotel={hotel}
                />
             ))   
            }
        </div>

    </section>
    </Fragment>
  );
}
