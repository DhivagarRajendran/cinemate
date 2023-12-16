import {useFetch} from "../hooks/useFetch"
import {Card} from "../components"
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({apiPath ,title}) => {
  //const[movies,setMovies] = useState([]);
  //const [url , setUrl] = useState("https://api.themoviedb.org/3/movie/now_playing?api_key=e3a291f46157a22cf2b563f23e9c8739")

  /*useEffect(()=>{
    async function fetchMovies(url)
    {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results)
      console.log(data.results);
    }
    fetchMovies(url);
  },[url])*/
  useTitle(title);
  const {data: movies} = useFetch(apiPath)
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap gap-8 other:justify-evenly">
              {
                movies && movies.map((movie) =>
                  <Card key={movie.id} movie={movie} />
                )}
          </div>
      </section>
    </main>
  )
}
