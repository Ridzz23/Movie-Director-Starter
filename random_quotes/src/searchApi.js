import React, { useState } from "react";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]); 
  const [error, setError] = useState(null); 

  const API_KEY = "9e2112acd2604c8008c1727a515430b4"; // Replace with your TMDb API key
  const BASE_URL = "https://api.themoviedb.org/3";

  const fetchMovies = async () => {
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      setMovies(data.results || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      setMovies([]); 
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Movie Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "8px", width: "300px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 15px" }}>
          Search
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {movies.map((movie) => (
          <li key={movie.id} style={{ marginBottom: "10px" }}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
