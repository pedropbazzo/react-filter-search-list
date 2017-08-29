import React, { Component } from 'react';
import MovieList from './MovieList.js';
import SearchInput from './SearchInput.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ui: {},
      data: {},
      dataFiltered: {}
    };

    this.filterData = this.filterData.bind(this);
  }
  filterData(value) {
    let data = Object.assign({}, this.state.data);
    let dataFiltered = Object.values(data).filter(movie => movie.title.match(new RegExp(value, 'i')));
    if(dataFiltered.length === 0){
      dataFiltered = Object.values(data).filter(movie => movie.releaseYear.toString().match(new RegExp(value, 'i')));
    }
    if(dataFiltered.length === 0){
      dataFiltered = Object.values(data).filter(movie => movie.releaseCountry.match(new RegExp(value, 'i')));
    }
    this.setState({dataFiltered});
  }
  componentDidMount() {
    fetch('./data.json').then(response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ', response.status);
        return;
      }
      response.json().then(data => {
        console.log(data);
        this.setState({
          data,
          dataFiltered: data
        });
      });
    }).catch(error => {
      console.log('Error with fetch', error);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="app__header">
          <SearchInput
            filterData={this.filterData}
          />
        </div>
        <div className="app__body">
          <MovieList
            data={this.state.dataFiltered}
          />
        </div>
      </div>
    );
  }
}

export default App;
