import { Fragment, useRef } from "react";

interface Props {
  setNameSearched: React.Dispatch<React.SetStateAction<string>>;
  filter : boolean;
  setFilter : React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterName = ({ setNameSearched, filter, setFilter }: Props) => {
  const inputSearch = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (inputSearch.current?.value) {
      setNameSearched(inputSearch.current.value.trim().toLowerCase());
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="py-5 px-2 mx-auto flex items-center ">
        <input type="text" className="p-2 border border-gray-300  outline-none" ref={inputSearch} />
          <button className="p-2  bg-firs-color text-white ">Search</button>
          <p onClick={()=> setFilter(!filter)} className="md:hidden flex pl-2">filter</p>
      </form>
    </Fragment>
  );
};
