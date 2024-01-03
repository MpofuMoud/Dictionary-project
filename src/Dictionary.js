import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  //https://dictionaryapi.dev - documentation

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  return (
    <div className="Dctionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            placeholder="Enter a word"
            onChange={handleKeywordChange}
            defaultValue={PaymentResponse.defaultKeyword}
          />
        </form>
        <div className="hint text-muted">
          suggested words: sunset, wine, yoga, plant...
        </div>
      </section>

      <Results results={results} />
    </div>
  );
}
