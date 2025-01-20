import React from "react";
import MovieSearch from "./searchApi.js";
import PopularMovies from "./home.js";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <MovieSearch />
    </div>
  );
}

export default App;