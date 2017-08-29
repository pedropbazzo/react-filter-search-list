import React, { Component } from 'react';
import MovieList from './MovieList.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ui: {},
      data: {}
    };
  }
  componentDidMount() {
    fetch('./data.json').then(response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ', response.status);
        return;
      }
      response.json().then(data => {
        console.log(data);
        this.setState({ data });
      });
    }).catch(error => {
      console.log('Error with fetch', error);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="app__header">

        </div>
        <div className="app__body">
          <MovieList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
