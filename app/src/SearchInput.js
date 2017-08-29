import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        this.props.filterData(event.target.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='Type to search'
                    onChange={this.onInputChange}
                />
            </div>
        );
    }
};

export default SearchInput;