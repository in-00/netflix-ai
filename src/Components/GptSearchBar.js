import openai from "../Utils/openai";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstants";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    
      let gptResults = null;
      let gptMovies;
      gptMovies =  ["Andaz Apna Apna", "Hera Pheri"," Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"];
    // try {
    //     gptResults = await openai.chat.completions.create({
    //         messages: [{ role: "user", content: gptQuery }],
    //         model: "gpt-3.5-turbo",
    //       });
    //       console.log("result: " , gptResults);
    //       gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
    // } catch (error) {
    //     gptMovies =  ["Andaz Apna Apna", "Hera Pheri"," Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"];
    // }
    if (!gptResults?.choices) {
      // TODO: Write Error Handling
    }

    

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;