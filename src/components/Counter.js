import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super();

        this.state = {
            number: 0
        }

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);

    }
    onIncrement(){
        this.setState({
            number: this.state.number + 1
        })
    }
    onDecrement(){
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return (
            <div className="Counter">
                <p className="InputField">
                    <input type="text"/>
                </p>

                <div className="CountButtons">
                    <button onClick={this.onIncrement}>Plus</button>
                    <button onClick={this.onDecrement}>Minus</button>
                </div>

                <p className="CountResult">{this.state.number}</p>

            </div>
        )
    }
}

export default Counter;