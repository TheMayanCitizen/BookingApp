import { Fragment } from "react/jsx-runtime";
import { Booking } from "./types/BookCard";

interface Props {
  book: Booking;
  deleteBooking: (url: string, id: number, withToken: boolean) => void;
}

export const BookCard = ({ book, deleteBooking }: Props) => {
  const initalDate = new Date(book.checkIn).getTime();
  const finalDate = new Date(book.checkOut).getTime();
  const reservationDays = (finalDate - initalDate) / (100 * 60 * 60 * 24);

  const handleDelete = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${book.id}`;
    deleteBooking(url, book.id, true);
  };

  return (
    <Fragment>
      <section>
        <header>
          <img src={book.hotel.images[0].url} alt="" />
        </header>
        <h3>{book.hotel.name}</h3>
        <div>
          {book.hotel.city.name},{book.hotel.city.country}
        </div>
        <p>Rate and comment this visit</p>
        <ul>
          <li>
            <span>Reservation Days</span>
            <span>{reservationDays}</span>
          </li>
          <li>
            <span>Subtotal Price</span>
            <span>${Number(book.hotel.price) * reservationDays}</span>
          </li>
        </ul>
        <button onClick={handleDelete}>
          <i className="bx bx-trash card__btn"></i>
        </button>
      </section>
    </Fragment>
  );
};
