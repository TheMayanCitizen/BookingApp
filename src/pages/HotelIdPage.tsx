import { Fragment, useEffect } from "react";
import { useFetch } from "../hook/useFetch";
import { useParams } from "react-router-dom";
import { FormReservations, MapHotel, OtherHotels, SliderImages } from "../components";

const maxRating = 5;

export const HotelIdPage = () => {
  const { id } = useParams();
  const { response, getApi } = useFetch();

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels/${id}`;
    getApi(url);
  }, [id]);


  return (
    <Fragment>
      <div>
        {response && (
          <section className="hotel__container">
            <h2 className="hotel__name">{response?.name}</h2>
            <div className="hotel__stars">
              {Array.from({ length: maxRating }, (_, index) => (
                <i
                  key={index}
                  className={
                    index < Math.floor(response?.rating)
                    ? "bx bxs-star"
                    : "bx bx-star"
                  }
                ></i>
              ))}
              <span className="hotel__rating">{response?.rating}</span>
            </div>
            <SliderImages response={response}/>

            <div className="hotel__img__container">
              <img
                src={response?.images[0].url}
                alt=""
                className="hotel__img"
              />
            </div>
            <div className="hotel__info">
              <article className="hotel__map__container">
                <div className="hotel__map"></div>
                <div className="hotel__address">
                  <i className="bx bx-map"></i>
                  <address>{response?.address}</address>
                </div>
              </article>
              <div>
                {response && (
                  <MapHotel
                    lat={Number(response.lat)}
                    lon={Number(response.lon)}
                  />
                )}
              </div>

              <p className="hotel__description">{response?.description}</p>
            </div>
            <article>
              {localStorage.getItem("token") && (<FormReservations hotelId={id} />)}
            </article>
            <OtherHotels city={response?.city} id={Number(id)} />
          </section>
        )}
      </div>
    </Fragment>
  );
};
