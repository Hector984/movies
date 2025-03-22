import { useEffect, useRef, useState } from "react";
import api from "../../../api/axiosConfig";
import { useParams } from "react-router-dom";

const Reviews = () => {
  let [movieDetails, setMovieDetails] = useState({ poster: "", title: "", reviews: [] });
  let [comment, setComment] = useState("");
  let params = useParams();
  let movieId = params.id;

  useEffect(() => {
    getMovieDetail();
  }, []);

  const getMovieDetail = async () => {
    try {
      const response = await api.get(`/movies/${movieId}`);
      
      setMovieDetails({
        poster: response.data.poster,
        title: response.data.title,
        reviews: response.data.reviewIds
      });
    } catch (error) {
      console.log(error);
    }
  };

  const sendReview = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/reviews', {
        reviewBody: comment,
        imdbId: movieId
      });

      setComment("");

      setMovieDetails(prevDetails => ({
        ...prevDetails,
        reviews: [...prevDetails.reviews, {body: response.data.body, id: response.data.id}]
      }));

    }catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-7 mt-10">
      <div className="justify-items-center">
        <div className="flex flex-col items-center justify-evenly">
          <div className="movie-poster">
            <img src={movieDetails.poster} alt="" />
          </div>
          <h4 className="mt-3">{movieDetails.title}</h4>
        </div>
      </div>
      <div>
        <form className="mr-6" onSubmit={sendReview}>
          <div className="flex flex-col">
            <label htmlFor="" className="mb-2">Deja tu comentario</label>
            <textarea name="" id="" rows={5} 
            placeholder="¿Qué te ha parecido la película?" 
            className="border rounded-md p-2"
            onInput={(e) => setComment(e.target.value)}
            value={comment}
            ></textarea>
          </div>

          <button className="float-end mt-2 bg-slate-500 p-2 rounded-md text-white">Enviar</button>
        </form>

        {/* Seccion de comentarios */}
        <div className="mt-20">
          {movieDetails.reviews.map((c) => {
            return (<h2 key={c.id}>{c.body}</h2>)
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
