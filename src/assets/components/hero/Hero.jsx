import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ movies }) => {
    return (
    <div className="movie-carousel-container">
      <Carousel>
      {movies.map((movie) => {
          return (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
                <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt="" />
                    </div>
                    <div className="movie-title">
                      <Link to={`/movie-reviews/${movie.imdbId}`}>
                        <h4>{movie.title}</h4>
                      </Link>
                    </div>

                    <div className="movie-buttons-container">
                      <Link to={`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                      <div className="play-button-icon-container">
                        <FontAwesomeIcon className="play-button-icon" icon= {faCirclePlay} />
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
