import {Routes , Route} from "react-router-dom";
// import{Header , Footer , Card} from "../components";
import { Search , MovieList , MovieDetails , PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-900">
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated Movies"/>} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular Movies" />} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming Movies" />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
