import React, { Component } from 'react';
import { FilterList } from './FilterList';

import { createStore } from 'redux';
import reducers from '../reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <h1>Filter words</h1>
                    <p className="InputField">
                        <input type="text"/>
                    </p>
                    <FilterList/>
                </div>
            </Provider>
        );
    }
}

export default App;