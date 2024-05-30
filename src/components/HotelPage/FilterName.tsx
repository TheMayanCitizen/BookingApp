import { useRef } from "react";

interface Props {
  setNameSearched: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterName = ({ setNameSearched }: Props) => {
  const inputSearch = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (inputSearch.current?.value) {
      setNameSearched(inputSearch.current.value.trim().toLowerCase());
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputSearch} />
        <button>Search</button>
      </form>
    </div>
  );
};
