import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

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
                      <Link to={`/${movie.imdbId}`}>
                        <h4>{movie.title}</h4>
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
