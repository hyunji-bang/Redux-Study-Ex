import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div className="Counter">
                <p className="InputField">
                    <input type="text"/>
                </p>

                <div className="CountButtons">
                    <button>Plus</button>
                    <button>Minus</button>
                </div>

                <p className="CountResult">1</p>

            </div>
        )
    }
}

export default Counter;