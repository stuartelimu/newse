import React from 'react';

function SearchForm(props) {
    return (
        <form className="form-inline mb-3" onSubmit={event => props.handleSubmit(event)}>

            <label className="sr-only" htmlFor="search-news">Username</label>
            <div className="input-group mb-2 mr-sm-2">
                
                <input type="search" className="form-control" id="search-news" placeholder="Search" value={props.value} onChange={event => props.handleChange(event)}/>
                
            </div>

            <button type="submit" className="btn btn-dark mb-2">Submit</button>
        </form>
    )
}

export default SearchForm;