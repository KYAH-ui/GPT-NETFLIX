import { useSelector } from "react-redux";
import useMovies from "../hooks/useMovies";
import usePopular from "../hooks/usePopular";
import useTrending from "../hooks/useTrending";
import useUpcoming from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";

const Browse = () => {

const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
useMovies();
usePopular();
useTrending();
useUpcoming();

  return (
    <div>
      <Header/>
{ showGptSearch ? (<GptSearch/>) : <><MainComponent/><SecondaryComponent/></>};
    
    
    </div>
  );
};

export default Browse;