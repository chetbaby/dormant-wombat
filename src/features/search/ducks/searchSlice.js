import { createSlice } from "@reduxjs/toolkit";

import { EMPTY, ERROR, LOADING, LOADED, LAST_PAGE } from "./searchConstants";

const initialState = {
  query: "",
  currentState: EMPTY,
  currentPage: 1,
  totalPages: null,
  results: null,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchMovies(state) {
      state.currentState = LOADING;
    },
    searchMoviesSuccess(state, action) {
      state.currentState = LOADED;
      state.results = action.payload;
    },
    searchMoviesFail(state, action) {
      state.currentState = ERROR;
      state.error = action.payload;
    },
    clearErrors(state) {
      state.currentState = EMPTY;
      state.error = null;
    },
  },
});

/* Actions */
export const {
  searchMovies,
  searchMoviesSuccess,
  searchMoviesFail,
  clearErrors,
} = searchSlice.actions;

export default searchSlice.reducer;
