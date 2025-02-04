import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
    <div className="absolute -z-10">
   <img className="h-screen object-cover"  src={BG_URL} alt="logo"/>
   </div>
<div className="">
 <GptSearchBar/>
      <GptMovieSuggestions/>
    </div></>
  );
};
 
export default GptSearch;