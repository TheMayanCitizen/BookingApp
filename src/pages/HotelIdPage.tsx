import { Fragment, useEffect } from "react";
import { useFetch } from "../hook/useFetch";
import { useParams } from "react-router-dom";

const maxRating = 5;

export const HotelIdPage = () => {
  const { id } = useParams();
  const { response, getApi } = useFetch();

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels/${id}`;
    getApi(url);
  }, [id]);

  console.log(response);

  return (
    <Fragment>
      <div>
        {response &&
         (
          <div>
              {Array.from({ length: maxRating }, (_, index) => (
              <i
                key={index}
                className={
                  index < Math.floor(response?.rating) ? "bx bxs-star" : "bx bx-star"
                }
              ></i>
            ))}
          </div>
        )
        }
      </div>
    </Fragment>
  )
};
