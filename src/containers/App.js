import React, { Component } from 'react';
import { FilterList } from './FilterList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Filter words</h1>
                <p className="InputField">
                    <input type="text"/>
                </p>
                <FilterList/>
            </div>
        );
    }
}

export default App;