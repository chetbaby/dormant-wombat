import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { searchMovies } from "./features/search/ducks/searchSlice";
import {
  selectResults,
  selectCurrentState,
} from "./features/search/ducks/searchSelectors";
import { LOADING, EMPTY } from "./features/search/ducks/stateConstants";
import searchResultsTransformer from "./dataTransformers/searchResultsTransformer";
import Title from "./features/search/components/Title";

const PageContainer = styled.main`
  display: block;
  position: relative;
  margin 0 5vw;
`;

function App() {
  const dispatch = useDispatch();
  const results = useSelector(selectResults);
  const currentState = useSelector(selectCurrentState);
  const transformedResult = searchResultsTransformer(results);

  return (
    <div className="App">
      <PageContainer>
        <Title>Movie Search</Title>
        <input onChange={(e) => dispatch(searchMovies(e.target.value))} />
        {currentState === EMPTY && <div>No results.</div>}
        {currentState === LOADING && <div>Loading...</div>}
        <pre>{JSON.stringify(transformedResult, null, 2)}</pre>
      </PageContainer>
    </div>
  );
}

export default App;
