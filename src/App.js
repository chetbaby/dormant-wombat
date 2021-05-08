import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "./features/search/ducks/searchSlice";
import {
  selectResults,
  selectCurrentState,
} from "./features/search/ducks/searchSelectors";
import { LOADING } from "./features/search/ducks/stateConstants";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const results = useSelector(selectResults);
  const currentState = useSelector(selectCurrentState);
  return (
    <div className="App">
      <input onChange={(e) => dispatch(searchMovies(e.target.value))} />
      <button type="button">search</button>
      {currentState === LOADING ? <div>Loading...</div> : null}
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}

export default App;
