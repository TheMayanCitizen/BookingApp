import axios from "axios";
import { useState } from "react";
import { Hotel } from "./types/Hotel.types";

export const useFetch = () => {
  const [response, setResponse] = useState<Hotel | undefined>();

  const getApi = (url: string) => {
    axios
      .get(url)
      .then(({ data }) => setResponse(data))
      .catch((error) => console.log(error));
  };

  return { response, getApi };
};
