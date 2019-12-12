import React from 'react';
import './App.css';
import SearchResult from './SearchResult';
import Loading from './Loading';
import SearchForm from './SearchForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      value: '',
      searchList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    // setInterval(() => this.setState({isLoading: !this.state.isLoading}), 7000)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSearch(query) {
    this.setState({isLoading: !this.state.isLoading})
    const APIKEY = process.env.REACT_APP_NEWS_API_KEY;
    const URL = `https://newsapi.org/v2/everything?q=${query}&from=2019-11-12&sortBy=publishedAt&apiKey=${APIKEY}`;

    fetch(URL)
    .then(response => response.json())
    .then(data => this.setState({searchList: data.articles, isLoading: !this.state.isLoading}));
    
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.handleSearch(this.state.value);
    
  }

  render() {

    return (
      <div className="App-header">
        <header className="container">
          <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        </header>
        
        {
        this.state.isLoading ? 
        <Loading />
        :
        <div className="container">
          
          {this.state.searchList.map(
            (result,index) => <SearchResult key={index} title={result.title} description={result.description} url={result.url} imgUrl={result.urlToImage} />
          )}
          
          
        </div>
        }

      </div>
    );
  }
}

export default App;
