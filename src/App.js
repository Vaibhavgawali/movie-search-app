import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?s=${query}&apikey=cfc9a617`)
      .then(response => {
        setResults(response.data.Search);
      })
      .catch(error => console.log(error));
  };

 return (
    <div className="App">
      <h1>Movie Search App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <div className="results">
        {results.map(result => (
          <div key={result.imdbID}>
            <img src={result.Poster} alt={result.Title} />
            <h2>{result.Title}</h2>
            <p>{result.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;