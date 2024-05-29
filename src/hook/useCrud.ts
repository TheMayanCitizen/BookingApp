import axios from "axios";
import { useState } from "react";
import { getConfigToken } from "../services/getConfigToken";
import type { CreateBooking } from "./types/CreateBooking.types";

type Data = CreateBooking;

export const useCrud = () => {
  const [response, setResponse] = useState<Data[]>();

  const getApi = (url: string, withToken: boolean) => {
    axios
      .get(url, withToken ? getConfigToken() : {})
      .then(({ data }) => setResponse(data))
      .catch((err) => console.log(err));
  };

  const postApi = (url: string, data: Data, withToken: boolean) => {
    axios
      .post(url, data, withToken ? getConfigToken() : {})
      .then(({ data }) => {
        console.log(data);
        setResponse(response ? [...response, data] : [data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteApi = (url: string, id: number, withToken: boolean) => {
    axios
      .delete(url, withToken ? getConfigToken() : {})
      .then(({ data }) => {
        console.log(data);
        response && setResponse(response.filter((item) => item.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return { response, getApi, postApi, deleteApi };
};
