import { useEffect } from "react";
import { useCrud } from "../hook/useCrud";
import { BookCard } from "../components/ReservationPage/BookCard";

export const ReservationPage = () => {
  const { booking, getApi, deleteApi } = useCrud();

  useEffect(() => {
    const url = "https://hotels-api.academlo.tech/bookings";
    getApi(url, true);
  }, []);

  return (
    <article className="container mx-auto space-y-6">
      <h2 className="text-3xl text-center">My Reservations</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {booking?.map((book) => (
          <BookCard key={book.id} book={book} deleteBooking={deleteApi} />
          // <h3>Reservation</h3>
        ))}
      </div>
    </article>
  );
};
