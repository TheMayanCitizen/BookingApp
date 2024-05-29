import axios from "axios";
import { useState } from "react";
import { Hotel } from "./types/Hotel.types";

export const useFetch = () => {
  const [response, setResponse] = useState<Hotel | undefined>();

  // Prueba
  const [prueba, setPrueba] = useState<Hotel []>([])

  // Images Slider

  const getApi = (url: string) => {
    axios
      .get(url)
      .then(({ data }) => setResponse(data))
      .catch((error) => console.log(error));
  };

  const getHotels = (url: string) => {
    axios
      .get(url)
      .then(({ data }) => setPrueba(data))
      .catch((error) => console.log(error));
  };

  // code Prueba

  const getImages = (url:string)=>{
      axios.get(url)
        .then(res => console.log(res.data))
        .catch(err=> console.log(err))
  }

  

  return { response, getApi, getHotels, prueba, getImages};
};
