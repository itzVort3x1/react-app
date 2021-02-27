import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {

    CLIENT_ID = process.env.CLIENT_ID_UNSPLASH;

    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos',{
            headers: {
                Authorization: 'Client-ID CLIENT_ID'
            },
            params: {
                query: term,
            }
        });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
};

export default App;