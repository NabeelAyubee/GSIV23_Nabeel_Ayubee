import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import { getMoreMovieLists, getMovieLists } from "../../hooks/getMovieLists";
import { setCurrentPage, setMovies, setResults, setTotalPage } from "../../redux/reducer";
import Tiles from "../../components/hoc/Tiles";
import { useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { getSearchResults } from "../../hooks/getSearchResults";
import { NoResultsFound } from "../../components/NoResultsFound";

const MovieList: React.FC = () => {
  const dispatch = useDispatch();
  const allMovies = useSelector((state: any) => state.all_movies.results);
  const currentPage = useSelector((state: any) => state.all_movies.currentPage);
  const totalPage = useSelector((state: any) => state.all_movies.totalPage);
  const search_results = useSelector((state: any) => state.search_results);
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getMovieLists();
      dispatch(setMovies(data));
      dispatch(setCurrentPage(data));
      dispatch(setTotalPage(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchMore = async () => {
    if (currentPage < totalPage && isFetching) {
      try {
        const data = await getMoreMovieLists(currentPage + 1);
        dispatch(setMovies(data));
        dispatch(setCurrentPage(data));
        dispatch(setTotalPage(data));
        setIsFetching(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsFetching(false);
      }
    }
  };

  useEffect(() => {
    if (isFetching) {
      fetchMore();
    }
  }, [isFetching]);

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  var fetch: any;
  const handleSearch = (e: any) => {
    clearTimeout(fetch);
    fetch = setTimeout(async () => {
      e.target.value.length !== 0 ? setIsSearching(true) : setIsSearching(false);
      const { results } = await getSearchResults(e.target.value);
      results?.length !== 0 ? dispatch(setResults(results)) : dispatch(setResults(null));
    }, 2000);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [allMovies]);

  if (!allMovies || allMovies?.length === 0) {
    return (
      <>
        <NavBar>
          <SearchBar placeholder="Search" />
          <HomeIcon sx={{ color: "grey", marginRight: "2rem" }} onClick={() => navigate("/movies")} />
        </NavBar>
        <LinearProgress style={{ marginTop: "55px" }} />
      </>
    );
  }

  return (
    <>
      <NavBar>
        <SearchBar placeholder="Search" handleSearch={handleSearch} />
        <HomeIcon sx={{ color: "grey", marginRight: "2rem" }} onClick={() => navigate("/movies")} />
      </NavBar>
      <div className="main-container">
        {
          <div className="grid-container">
            {isSearching && search_results && search_results?.length !== 0
              ? search_results?.map((i: any) => {
                  return <Tiles config={i} />;
                })
              : allMovies && allMovies?.length !== 0 && !isSearching
              ? allMovies?.map((i: any) => {
                  return <Tiles config={i} />;
                })
              : ""}
          </div>
        }
        {isSearching && (search_results?.length === 0 || !search_results) && <NoResultsFound />}
      </div>
    </>
  );
};

export default MovieList;
