import { Booking } from "./types/BookCard";

interface Props {
  book: Booking;
  deleteBooking: (url: string, id: number, withToken: boolean) => void;
}

export const BookCard = ({ book, deleteBooking }: Props) => {
  return (
    <h1>REservationCard</h1>
    //   <section>
    //   <header>
    //     <img src={book.hotel.images[0].url} alt="" />
    //   </header>
    //   <h3>{book.hotel.name}</h3>
    //   <div>
    //     {book.hotel.city.name},{book.hotel.city.country}
    //   </div>
    //   <p>Rate and comment this visit</p>
    //   <ul>
    //     <li>
    //       <span>Reservation Days</span>
    //       <span>{reservationDays}</span>
    //     </li>
    //     <li>
    //       <span>Subtotal Price</span>
    //       <span>${book.hotel.price * reservationDays}</span>
    //     </li>
    //   </ul>
    //   <button onClick={handleDelete}>
    //     <i className="bx bx-trash card__btn"></i>
    //   </button>
    // </section>
  );
};
