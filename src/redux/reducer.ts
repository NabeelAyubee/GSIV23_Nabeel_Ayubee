import { createSlice } from "@reduxjs/toolkit";

const all_movies = createSlice({
  name: "all_movies",
  initialState: {
    currentPage: 1,
    totalPage: null,
    results: [],
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload.page;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload.total_pages;
    },
    setMovies: (state, action) => {
      state.results = [].concat(state.results, action.payload.results);
    },
  },
});

const search_results = createSlice({
  name: "search_results",
  initialState: [],
  reducers: {
    setResults: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMovies, setTotalPage, setCurrentPage } = all_movies.actions;
export const { setResults } = search_results.actions;

const Combinereducers = {
  all_movies: all_movies.reducer,
  search_results: search_results.reducer,
};

export default Combinereducers;
