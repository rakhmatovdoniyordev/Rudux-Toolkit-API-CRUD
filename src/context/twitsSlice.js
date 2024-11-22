import { createSlice } from "@reduxjs/toolkit";
import axios from "../api";

export const twitsSlice = createSlice({
  name: "twits",
  initialState: {
    twits: [],
  },
  reducers: {
    setTwits(state, action) {
      state.twits = action.payload;
    },
    addTwit(state, action) {
      state.twits.push(action.payload);
    },
    removeTwit(state, action) {
      state.twits = state.twits.filter((twit) => twit.id !== action.payload);
    },
    editTwit(state, action) {
      const index = state.twits.findIndex((twit) => twit.id === action.payload.id);
      if (index !== -1) {
        state.twits[index] = action.payload;
      }
    },
  },
});

export const { setTwits, addTwit, removeTwit, editTwit } = twitsSlice.actions;

export default twitsSlice.reducer;


export const fetchTwits = () => async (dispatch) => {
  const response = await axios.get("/cards");
  dispatch(setTwits(response.data));
};

export const createTwit = (newTwit) => async (dispatch) => {
  const response = await axios.post("/cards", newTwit);
  dispatch(addTwit(response.data));
};

export const deleteTwit = (id) => async (dispatch) => {
  await axios.delete(`/cards/${id}`);
  dispatch(removeTwit(id));
};

export const updateTwit = (updatedTwit) => async (dispatch) => {
  const { id, ...data } = updatedTwit;
  const response = await axios.put(`/cards/${id}`, data);
  dispatch(editTwit(response.data));
};
