import React, { Component } from 'react';
import Loader from './Loader.js';
import MovieTile from './MovieTile.js';
import './MovieList.css';

class MovieList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let data = this.props.data;
        let movieList = Object.entries(data).length === 0 ? <Loader /> :   
        Object.entries(data).map((movie, index) => <MovieTile key={index} {...movie[1]} />);
        return (
            <div className='movieList'>{movieList}</div>
        );
    }
};

export default MovieList;