import { useEffect } from "react";
import { useCrud } from "../hook/useCrud";
import { BookCard } from "../components/ReservationPage/BookCard";

export const ReservationPage = () => {
  const { booking, getApi, deleteApi } = useCrud();

  useEffect(() => {
    const url = "https://hotels-api.academlo.tech/bookings";
    getApi(url, true);
  }, []);

  // const print = JSON.stringify(booking);
  console.log(booking);

  return (
    <article>
      <h2>My Reservations</h2>
      <div>
        {booking?.map((book) => (
          <BookCard key={book.id} book={book} deleteBooking={deleteApi} />
          // <h3>Reservation</h3>
        ))}
      </div>
    </article>
  );
};
