import React from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

import { setQuery, searchMovies } from "./features/search/ducks/searchSlice";
import {
  selectQuery,
  selectResults,
  selectCurrentPage,
  selectTotalPages,
  selectCurrentState,
} from "./features/search/ducks/searchSelectors";
import { LOADING, EMPTY, ERROR } from "./features/search/ducks/searchConstants";
import searchResultsTransformer from "./dataTransformers/searchResultsTransformer";
import Title from "./features/search/components/Title";
import Searchbar from "./features/search/components/Searchbar";
import TitleCard from "./features/search/components/TitleCard";

const PageContainer = styled.main`
  display: block;
  position: relative;
  margin 0 5vw;
`;

function App() {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const results = useSelector(selectResults);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const currentState = useSelector(selectCurrentState);
  const transformedResult = searchResultsTransformer(results);

  const handleSearch = (e) => {
    dispatch(setQuery(e.target.value));
    dispatch(searchMovies({ query, currentPage }));
  };

  return (
    <div className="App">
      <PageContainer>
        <Title>Movie Finder</Title>
        <Searchbar onChange={handleSearch} />
        {currentState === EMPTY && (
          <p style={{ textAlign: "center" }}>
            <b>Start typing to search for movies!</b>
          </p>
        )}
        {currentState === ERROR && <div>Error</div>}
        <InfiniteScroll
          dataLength={results?.length}
          next={() =>
            dispatch(searchMovies({ query, currentPage: currentPage + 1 }))
          }
          hasMore={currentPage !== totalPages}
          loader={
            currentState === LOADING && (
              <h4 style={{ textAlign: "center" }}>Loading...</h4>
            )
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>End of Results</b>
            </p>
          }
        >
          {transformedResult?.map((movie) => (
            <TitleCard key={movie.id} data={movie} />
          ))}
        </InfiniteScroll>
      </PageContainer>
    </div>
  );
}

export default App;
