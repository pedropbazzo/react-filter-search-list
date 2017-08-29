import React, { Component } from 'react';
import Loader from './Loader.js';

class MovieList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let data = this.props.data;
        let movieList = data.length === 0 ? <Loader /> : 'List of movie from data'
        return (
            <div>{movieList}</div>
        );
    }
};

export default MovieList;