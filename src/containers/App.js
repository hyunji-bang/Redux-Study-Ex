import React, { Component } from 'react';
import QQQ from './FilterList';

import { createStore } from 'redux';
import reducers from '../reducers';
import { Provider } from 'react-redux';

import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools());

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <h1>Filter words</h1>
                    <QQQ/>
                </div>
            </Provider>
        );
    }
}

export default App;