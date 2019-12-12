import React from "react";

function SearchForm(props) {
  return (
    <form
      className="form-row mb-3"
      onSubmit={event => props.handleSubmit(event)}
    >
      <div className="col-9">
        <label className="sr-only" htmlFor="search-news">
          Username
        </label>
        <div className="input-group mb-2 mr-sm-2">
          <input
            type="search"
            className="form-control"
            id="search-news"
            placeholder="Type a keyword e.g football, business, design"
            value={props.value}
            onChange={event => props.handleChange(event)}
          />
        </div>
      </div>
      <div className="col-3">
        <button type="submit" className="btn btn-dark mb-2">
        Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
