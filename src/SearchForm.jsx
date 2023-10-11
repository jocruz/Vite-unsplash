import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const {setSearchTerm,}= useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
 
    if(!searchValue) return;
    setSearchTerm(searchValue)
  };
  return (
    <section>
      <h1 className="title">unSplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search"
          name="search"
          placeholder="Cats"
        ></input>
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
