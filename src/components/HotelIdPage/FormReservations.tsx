import { SubmitHandler, useForm } from "react-hook-form";
import { useCrud } from "../../hook/useCrud";

interface Props {
  hotelId: string | undefined;
}

type FormValues = {
  checkIn: string;
  checkOut: string;
};

export const FormReservations = ({ hotelId }: Props) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const { postApi } = useCrud();

  const submit: SubmitHandler<FormValues> = (data): void => {
    const url = "https://hotels-api.academlo.tech/bookings";
    const objData = {
      ...data,
      hotelId,
    };

    postApi(url, objData, true);

    reset({
      checkIn: "",
      checkOut: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h3>If you want to book, please give me your:</h3>
      <label>
        <span>Check-in</span>
        <input type="date" {...register("checkIn")} />
      </label>
      <label>
        <span>Check-out</span>
        <input type="date" {...register("checkOut")} />
      </label>
      <button>Reserve a room!</button>
    </form>
  );
};
