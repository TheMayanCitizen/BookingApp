import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hotel } from "./types/hotels.types";
import { AppDispatch } from "..";
import axios from "axios";

type HotelTypes = [] | Hotel[];
// Define the initial state using that type
const initialState: HotelTypes = [];

export const counterSlice = createSlice({
  name: "hotels",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<Hotel[]>) => action.payload,
  },
});

export const { setHotels } = counterSlice.actions;

export default counterSlice.reducer;

export const getHotelsThunk = (url: string) => (dispatch: AppDispatch) => {
  axios
    .get(url)
    .then(({ data }) => dispatch(setHotels(data)))
    .catch((error) => console.log(error));
};
