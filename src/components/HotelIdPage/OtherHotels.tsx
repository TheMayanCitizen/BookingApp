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
       <section className='oh_container'>
        <h3 className='oh_title'>Other Hotels in <span className='oh_title_city'>{city?.country }</span></h3>
        <div className='oh_cards'>
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

      {/* <section className="others__container">
        <h3 className="others__title">
          Similar Hotels in{" "}
          <span className="others__country">{city?.country}</span>
        </h3>
        <div className="others__cards">
          {hotelsByCity
            ?.filter((hotel) => hotel.id !== Number(id))
            .map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
        </div> 
      </section>
      <section className="others__container">
        <h3 className="others__title">
          Similar Hotels in{" "}
          <span className="others__country">{city?.country}</span>
        </h3>
        <div className="others__cards">
          {prueba?.prueba.filter((hotel) => hotel.id !== Number(id))
            .map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
        </div>
      </section> */}
    </Fragment>
  );
}
