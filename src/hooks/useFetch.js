import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    console.log(process.env.REACT_APP_API_KEY);
    console.log(process.env.NODE_ENV);

    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=e3a291f46157a22cf2b563f23e9c8739&query=${queryTerm}`;
    console.log(url);

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])

  return { data }
}