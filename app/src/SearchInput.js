import React, { Component} from 'react';

class SearchInput extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div><input type='text' placeholder='Type to search' /></div>
        );
    }
};

export default SearchInput;