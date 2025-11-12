import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let shecodesApiKey = "b984974777eta0e26ff2f6c4c3ob0f17";
    let shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesApiKey}`;
    axios.get(shecodesApiUrl).then(handleImageResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Search for a word..."
        />
        <button type="submit">Search</button>
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
