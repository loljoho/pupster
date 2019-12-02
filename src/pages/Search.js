import React, { Component } from 'react';
import DogSearch from '../components/DogSearch';
import DogCard from '../components/DogCard';
import DogResults from '../components/DogResults';
import API from '../utils/API';

class Search extends Component {
  state = {
    search: '',
    results: [],
    error: ''
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    API.getDogByBreed(this.state.search)
      .then(res => {
        console.log(res);
        this.setState({ 
          results: res.data.message, 
          error: '' 
        });
      })
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    console.log(this.state.results.length);
    return (
      <>
        <h1>Search Pupster!</h1>
        <DogSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.results.length > 0 && 
          <DogResults results={this.state.results} />
        }
      </>
    );
  }
}

export default Search;