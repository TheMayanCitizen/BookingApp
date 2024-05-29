import { useEffect } from "react";
import { useCrud } from "../hook/useCrud";

export const ReservationPage = () => {
  const { response, getApi, deleteApi } = useCrud();

  useEffect(() => {
    const url = "https://hotels-api.academlo.tech/bookings";
    getApi(url, true);
  }, []);

  // const print = JSON.stringify(response);
  console.log(response);

  return (
    <article>
      <h2>My Reservations</h2>
      <div>
        {response?.map((book) => (
          // <BookCard key={book.id} book={book} deleteBooking={deleteApi} />
          <h3>Reservation</h3>
        ))}
      </div>
    </article>
  );
};
