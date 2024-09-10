import {signOut , onAuthStateChanged} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO , SUPPORTED_LANGUAGES, USER_AVATAR} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";



const Header = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const user = useSelector((store) => store.user);
const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
 const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
    navigate("/error");
    })};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // thus will work when the user will sign in
        const {uid , email , displayName , photoURL} = user;  
        // console.log(user);
        dispatch(addUser({
          uid:uid , 
          email:email , displayName:displayName ,
           photoURL:photoURL
          })
        );
        navigate("/browse");
      } else {
    //  this will work when the user will sign out
    dispatch(removeUser());
    navigate("/");
  }});
  return () => unsubscribe();
    } , []);

    const handleGptSearchBtn = () => {
  dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
     dispatch(changeLanguage(e.target.value));
   };

return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
 <img className = "w-40 mx-auto md:mx-0" src={LOGO} alt="logo"/>     

 {user && (
  <div className="flex p-0">
{showGptSearch && (<select className="p-2 m-2 bg-gray-950 text-white" onChange={handleLanguageChange}>
{SUPPORTED_LANGUAGES.map((lang) => (
<option key = {lang.identifier} value={lang.identifier}>{lang.name}</option>
))};
</select>)}
<button className="text-white mx-4 my-0 px-4 py-0 rounded-lg bg-amber-950" onClick={handleGptSearchBtn}>
  {showGptSearch ? "Homepage" : "GPT Search"} 
</button>
  <img className="w-14 h-12" alt="usericon" src={USER_AVATAR}/> 
 <button onClick = {handleSignOut} className="text-white font-bold">Sign out</button>   
 </div>
 )}
 </div>
  );
};

export default Header;
