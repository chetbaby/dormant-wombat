import { createSlice } from "@reduxjs/toolkit";

import { EMPTY, ERROR, LOADING, LOADED, LAST_PAGE } from "./searchConstants";

const initialState = {
  query: "",
  currentState: EMPTY,
  currentPage: 0,
  totalPages: null,
  results: [],
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.currentPage = 0;
      state.query = action.payload;
    },
    searchMovies(state) {
      state.currentState = LOADING;
    },
    searchMoviesSuccess(state, action) {
      state.currentState = LOADED;
      state.results = [...state.results, ...action.payload.results];
      state.currentPage += 1;
      state.totalPages = action.payload.totalPages;
    },
    searchMoviesFail(state, action) {
      state.currentState = ERROR;
      state.error = action.payload;
      state.results = null;
    },
    clearErrors(state) {
      state.currentState = EMPTY;
      state.error = null;
    },
  },
});

/* Actions */
export const {
  setQuery,
  searchMovies,
  searchMoviesSuccess,
  searchMoviesFail,
  clearErrors,
  addResults,
  addResultsSuccess,
  addResultsFail,
} = searchSlice.actions;

export default searchSlice.reducer;
