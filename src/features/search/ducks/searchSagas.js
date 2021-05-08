import { put, call, delay, takeLatest, all } from "redux-saga/effects";

import apiFactory from "../../../services/api";
import {
  searchMovies,
  searchMoviesSuccess,
  searchMoviesFail,
} from "./searchSlice";

const api = apiFactory.create();

function* searchMoviesSaga(action) {
  const query = action.payload;
  yield delay(500);
  let response;
  try {
    response = yield call(api.searchMovies, query);
    const { results } = response?.data;
    yield put(searchMoviesSuccess(results));
  } catch (error) {
    yield put(searchMoviesFail("We encountered an error with your request."));
  }
}

function* searchMoviesWatcher() {
  yield takeLatest(searchMovies.type, searchMoviesSaga);
}

export default function* searchSagas() {
  yield all([searchMoviesWatcher()]);
}
