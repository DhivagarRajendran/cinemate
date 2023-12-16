import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
<main className="h-screen w-full flex flex-col justify-center items-center">
	<h1 className="text-9xl font-extrabold text-gray-700 dark:text-white tracking-widest">404</h1>
	<div className="text-gray-700 dark:text-white px-2 text-sm ">
		Page Not Found
	</div>
	<button className="mt-5">
      <Link
        className="relative inline-block text-sm font-medium text-gray-800 dark:text-white group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-black group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-white dark:bg-gray-800 border border-current">
          <Link to="/">Go Home</Link>
        </span>
      </Link>
    </button>
</main>
  )
}
