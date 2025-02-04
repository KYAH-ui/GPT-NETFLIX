import { IMG_CDN_URL } from "../utils/constants"


const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="pr-4 w-36 md:w-48">
<img alt="MovieCard" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard