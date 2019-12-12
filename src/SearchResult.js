import React from "react";
import ReactDom from "react-dom";

function SearchResult(props) {
  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <h5 className="card-title">
              <a href={props.url} target="blank">{props.title}</a>
            </h5>
            <p className="card-text">{props.description}</p>
          </div>
          <div className="col-4">
            <img src={props.imgUrl} className="img-fluid" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
