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
    console.log(value);
    debugger
    let data = Object.assign({}, this.state.data);
    let titles = Object.values(data).filter(movie => movie.title === value);
    
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
