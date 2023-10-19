import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/UseMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden ">
      <iframe
        className="absolute  w-auto min-w-full min-h-full max-w-none"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&showinfo=0&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
