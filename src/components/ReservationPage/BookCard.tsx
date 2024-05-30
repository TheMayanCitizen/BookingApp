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
      <section className="w-[300px] rounded-xl overflow-hidden shadow-2xl space-y-3 ">
        <header>
          <img src={book.hotel.images[0].url} alt="" />
        </header>
        <h3 className="font-bold text-center mt-2 mb-0 ">{book.hotel.name}</h3>
        <article className="px-4 pb-4 space-y-2">
          <div className="text-sm">
            {book.hotel.city.name},{book.hotel.city.country}
          </div>
          <p className="text-[#3535ff] hover:underline hover:cursor-pointer text-sm">
            Rate and comment this visit...
          </p>
          <ul className="text-lg">
            <li className="flex justify-around">
              <span>Reservation Days</span>
              <span className="font-extralight">{reservationDays}</span>
            </li>
            <li className="flex justify-around">
              <span>Subtotal Price</span>
              <span className="font-extralight">
                ${Number(book.hotel.price) * reservationDays}
              </span>
            </li>
          </ul>
          <button onClick={handleDelete} className="block mx-auto">
            <i className="bx bx-trash card__btn"></i>
          </button>
        </article>
      </section>
    </Fragment>
  );
};
