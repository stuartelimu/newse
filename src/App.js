import React from 'react';
import './App.css';
import SearchResult from './SearchResult';
import Loading from './Loading';
import SearchForm from './SearchForm';

function App() {
  return (
    <div className="App-header">
      <header className="container">
        <SearchForm />
      </header>

      <div className="container">
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>

      <Loading />
      

    </div>
  );
}

export default App;
