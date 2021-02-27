import React from 'react';

class SearchBar extends React.Component{

    state = { term: '' };
    // if you get state not defined just use arrow function to solve the problem
    onFormSubmit = (event) => {
        event.preventDefault();
        // to access props in 
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label><i className="search icon"></i> Image Search</label>
                        <input type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })} 
                                
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;