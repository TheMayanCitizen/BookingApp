import { SubmitHandler, useForm } from "react-hook-form";
import type { PriceRange } from "../../pages/types/HomePage.types";

type Props = {
  setFromTo: React.Dispatch<React.SetStateAction<PriceRange>>;
};

type Inputs = {
  from: string;
  to: string;
};

export const FilterPrice = ({ setFromTo }: Props) => {
  const { register, reset, handleSubmit } = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = (data) => {
    const from = Number(data.from);
    const to = +data.to;

    setFromTo({
      from: data.from === "" ? 0 : from,
      to: data.to === "" ? Infinity : to,
    });
    reset({
      from: "",
      to: "",
    });
  };

  return (
    <article>
      <h4>Price</h4>

      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>From:</span>
          <input type="number" {...register("from")} />
        </label>
        <label>
          <span>To:</span>
          <input type="number" {...register("to")} />
        </label>
        <button>Submit</button>
      </form>
    </article>
  );
};
