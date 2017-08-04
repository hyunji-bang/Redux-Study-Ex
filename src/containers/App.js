import React, { Component } from 'react';
import CounterContainer from './CounterContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Counter</h1>
                <CounterContainer/>
            </div>
        );
    }
}

export default App;