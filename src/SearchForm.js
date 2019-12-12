import React from 'react';

function SearchForm() {
    return (
        <form className="form-inline mb-3">

            <label className="sr-only" for="search-news">Username</label>
            <div className="input-group mb-2 mr-sm-2">
                
                <input type="search" className="form-control" id="search-news" placeholder="Search"/>
                
            </div>

            

            <button type="submit" className="btn btn-dark mb-2">Submit</button>
        </form>
    )
}

export default SearchForm;