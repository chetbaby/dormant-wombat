import { all } from "redux-saga/effects";

import searchSagas from "../features/search/ducks/searchSagas";

export default function* rootSagas() {
  yield all([searchSagas()]);
}
