import React, { useEffect, useState } from "react";
import Image from "../../components/Image";
import { getMovieDetails } from "../../hooks/getMovieDetails";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import HomeIcon from "@mui/icons-material/Home";
import LinearProgress from "@mui/material/LinearProgress";

const MovieDetails: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id: any = params["id"];
  const [data, setData] = useState<any>(null);
  const [year, setYear] = useState<number | null>(null);
  const [runtime, setRuntime] = useState<string | null>(null);

  useEffect(() => {
    const year = new Date(data?.release_date).getFullYear();
    const runtime = String((data?.runtime / 60).toFixed(2));
    const [hour, minute] = runtime.split(".");
    const length = `${hour} h ${minute} m`;
    setYear(year);
    setRuntime(length);
  }, [data]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getMovieDetails(id);
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data || !year || !runtime) {
    return (
      <>
        <NavBar>
          <h1 style={{ color: "gray" }}>Movie Details</h1>
          <HomeIcon sx={{ color: "grey", marginRight: "2rem" }} onClick={() => navigate("/movies")} />
        </NavBar>
        <LinearProgress style={{ marginTop: "55px" }} />
      </>
    );
  }
  return (
    <>
      <NavBar>
        <h1 style={{ color: "gray" }}>Movie Details</h1>
        <HomeIcon sx={{ color: "grey", marginRight: "2rem" }} onClick={() => navigate("/movies")} />
      </NavBar>

      <div className="main-container">
        <div className="flex-container">
          <Image src={data?.poster_path} original={true} />
          <div className="details-container">
            <div className="flex-container">
              <h1 style={{ fontSize: "50px", marginRight: "15px" }}>{data?.original_title}</h1>
              <span style={{ fontSize: "50px", color: "grey" }}> ({(data?.vote_average).toFixed(1)}) </span>
            </div>
            <span style={{ fontSize: "30px", color: "grey" }}>
              {year} | {runtime}
            </span>
            <p style={{ marginTop: "15px" }}>{data?.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
