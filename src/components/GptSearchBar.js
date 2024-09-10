import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import model from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

const searchMovieTMDB = async(movie) =>{
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
  const json = await data.json();
  return (json.results);
};

const handleGptSearchClick = async () => {
  // console.log(searchText.current.value);

  const gptQuery =
    "Act as a Movie Recommendation system and suggests some movies for the query : " +
    searchText.current.value +
    "only give me name of 5 movies, comma separated like the example result given ahead. Example result : gadar, It ends with us , fighter , stree2 , sholay";

  async function run() {
    const result = await model.generateContent([gptQuery]);
    console.log(result.response.text());
    return result.response.text();
  }

  let moviescombined = "";
  let gptresult = [];

  try {
    moviescombined = await run();
    gptresult = moviescombined.split(",").map((movie) => movie.trim()); // Trimming any extra spaces
    console.log(gptresult);
  } catch (error) {
    console.error("Error fetching GPT results:", error);
  }

  // Create the promise array outside and pass it correctly to Promise.all
  const promiseArray = gptresult.map((element) => searchMovieTMDB(element));

  try {
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({ movieNames: gptresult, movieResults: tmdbResults }));
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

 return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
<form className=" w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>;
<input ref = {searchText} type="text" className = "p-2 m-2 flex col-span-9 flex" placeholder={lang[langkey].gptSearchPlaceholder}/>
<button className="col-span-3 m-1 py-0 px-1 mx-0 bg-red-800 text-white flex rounded-lg"onClick={handleGptSearchClick}>
    {lang[langkey].search}
</button>
</form></div>
  );
};

export default GptSearchBar;