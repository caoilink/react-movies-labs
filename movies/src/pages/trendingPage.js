import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import PaginationTable from "../components/table";
import { getTrendingMovies } from "../api/tmdb-api";
export default function TableWithAPI() {
  const [cells, setCells] = useState([]);

  const getData = async () => {
    const resp = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}");
    const data = await resp.json();
    setCells(data);
  };
  const columns = React.getTrendingMovies(
    () => [
      {
        Header: "Name",
        accessor: "id" // accessor is the "key" in the data
      },
      {
        Header: "Overview",
        accessor: "title"
      },
      {
        Header: "Overview",
        accessor: "title"
      }
    ],
    []
  );

  useEffect(() => {
    getData();
  }, []);
  console.log(getTrendingMovies);
  const data = React.getTrendingMovies(() => cells, []);

  return <>{cells && <PaginationTable columns={columns} data={data} />}</>;
}