import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import searchReducer from "../features/search/ducks/searchSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
});

sagaMiddleware.run(rootSaga);
