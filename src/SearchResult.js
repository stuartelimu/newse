import React from 'react';
import ReactDom from 'react-dom';

function SearchResult() {
    return (
        
        <div className="card text-white bg-dark mb-3">
            <div className="row">
            <div className="col-8">
            <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            <div className="col-4">
            <img src="https://images.pexels.com/photos/3311533/pexels-photo-3311533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="img-fluid" alt="..."></img>
            </div>
            </div>
        </div>
        
    )
}

export default SearchResult;