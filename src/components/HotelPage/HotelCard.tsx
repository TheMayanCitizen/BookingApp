import { useNavigate } from "react-router-dom";
import { Hotel } from "../../store/slices/types/hotels.types";
import "./styles/HotelCard.css";
interface Props {
  hotel: Hotel;
}

const maxRating = 5;
export const HotelCard = ({ hotel }: Props) => {
  const navigate = useNavigate();
  const navigateHotelId = () => {
    navigate(`/hotel/${hotel.id}`);
  };
  return (
    <article className="card">
      <header className="card__header">
        <img src={hotel.images[0].url} alt="" className="card__img" />
      </header>
      <section className="card__section">
        <h3 className="card__name">{hotel.name}</h3>
        <div className="card__rating">
          <div className="card__stars">
            {Array.from({ length: maxRating }, (_, index) => (
              <i
                key={index}
                className={
                  index < Math.floor(+hotel?.rating)
                    ? "bx bxs-star"
                    : "bx bx-star"
                }
              ></i>
            ))}
          </div>
          {hotel.rating}
        </div>
        <div className="card__location">
          {hotel.city.name}, {hotel.city.country}
        </div>
        <div className="card__price">{hotel.price}</div>
      </section>
      <footer className="card__footer">
        <button className="card__btn" onClick={navigateHotelId}>
          See more...
        </button>
      </footer>
    </article>
  );
};
