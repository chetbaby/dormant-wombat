import { createSlice } from "@reduxjs/toolkit";

import { EMPTY, ERROR, LOADING, LOADED, LAST_PAGE } from "./stateConstants";

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
      state.isLoading = true;
    },
    searchMoviesSuccess(state, action) {
      state.isLoading = false;
      state.results = [action.payload];
    },
    searchMoviesFail(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearErrors(state) {
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
