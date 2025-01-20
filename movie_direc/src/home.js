// PopularMovies.js
import React, { useEffect, useState } from "react";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = "9e2112acd2604c8008c1727a515430b4"; // Replace with your TMDb API key

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status_message || "Failed to fetch movies.");
      }

      const data = await response.json();
      setMovies(data.results || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching popular movies:", err);
      setError(err.message || "Something went wrong.");
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Popular Movies</h1>
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

export default PopularMovies;
