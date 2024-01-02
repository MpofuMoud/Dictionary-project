import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dctionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter a word"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
