import { createSlice } from "@reduxjs/toolkit";

const MyFavorMovies = createSlice({
  name: "listMovie",
  initialState: { listFavor: [] },
  reducers: {
    addToListFavor: (state, action) => {
      const movie = action.payload;

      if (!state.listFavor.some((o) => o.id === movie.id)) {
        state.listFavor.push(movie);
      }
    },
    removeFromListFavor: (state, action) => {
      const movie = action.payload;
      if(movie === null) {
        state.listFavor = []
      } else {
        state.listFavor = state.listFavor.filter((i) => i.id !== movie.id);
      }
    }
  }
});

const { reducer, actions } = MyFavorMovies;
export const { addToListFavor, removeFromListFavor } = actions;
export default reducer;
