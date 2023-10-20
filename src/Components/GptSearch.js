import { BG_URL } from "../Utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div className="bg-black absolute -z-30  w-screen h-screen">
      <div className="fixed -z-10 w-screen h-screen">
        <img className=" w-screen h-screen" src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
export default GPTSearch;