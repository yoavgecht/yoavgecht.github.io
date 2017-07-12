import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){ //called automatically when new instance of SearchBar is created
        super(props);

        this.state = { term: '' }; //Initialize a state by creating a new object this.state with term property
    }

    render() { //class must have render function that return JSX
        return (
            <div className="search-bar">
                 <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} 
                 />
            </div>
        )
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
} 

export default SearchBar;