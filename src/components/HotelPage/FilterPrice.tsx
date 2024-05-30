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

      <form className="space-y-3" onSubmit={handleSubmit(submit)}>
        <label className="flex flex-col">
          <span className="font-thin ">From:</span>
          <input type="number" className="border-2 border-gray-300  rounded-md p-2 outline-none" {...register("from")} />
        </label>
        <label className="flex flex-col">
          <span className="font-thin ">To:</span>
          <input type="number" className="border-2 border-gray-300  rounded-md p-2 outline-none" {...register("to")} />
        </label>
        <button type="submit" className="p-2 rounded-md bg-firs-color w-full text-white ">Submit</button>
      </form>
    </article>
  );
};
