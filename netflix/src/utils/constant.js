export const API_END_POINT = "https://netflix-app-1our.onrender.com/api/v1/user";
export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const API_ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

console.log(API_KEY, API_ACCESS_TOKEN, process.env.REACT_APP_TMDB_IMG_URL);

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_ACCESS_TOKEN}`,
    }
  };

// TMDB API Endpoints
export const Now_Playing_Movie = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
export const Popular_Movie = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
export const Top_Rated_Movie = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
export const Upcoming_Movie = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

export const SEARCH_MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

export const TMDB_IMG_URL = process.env.REACT_APP_TMDB_IMG_URL;
