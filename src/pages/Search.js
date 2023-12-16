import {useFetch} from "../hooks/useFetch"
import {Card} from "../components"
import { useSearchParams } from "react-router-dom"
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath}) => {
  const[searchParam] = useSearchParams();
  const queryTerm = searchParam.get("q");
  const {data: movies} = useFetch(apiPath , queryTerm);
  useTitle(`Search result for ${queryTerm}`);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <p className="text-2xl text-gray-700 dark:text-white py-7">{movies.length === 0 ? `No Result Found For '${queryTerm}'` : `Results Found For '${queryTerm}'`}</p>
          <div className="flex justify-start flex-wrap gap-5 other:justify-evenly">
              {
                movies && movies.map((movie) =>
                  <Card key={movie.id} movie={movie} />
                )}
          </div>
      </section>
    </main>
  )
}
