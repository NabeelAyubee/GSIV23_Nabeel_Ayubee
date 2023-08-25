import axios from "axios";
import { URL } from "./urls";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDE5ZGM3YjUxMDgxNWRiNDljZTA1NjQ4YWUzMTI2MiIsInN1YiI6IjY0ZGY5YjE4NWFiODFhMDEzOTE5ZmMyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Uix_XpE3Kxc5VU6N0J4yQarzHcnnwwdW04_SlU4o04";

const headers = {
  Authorization: `Bearer ${API_KEY}`,
};

export const getSearchResults = async (query: string) => {
  return await axios
    .get(`${URL.movieSearch}`, { headers, params: { query: query } })
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
