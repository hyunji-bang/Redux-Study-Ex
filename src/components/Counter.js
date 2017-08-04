import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super();

        this.state = {
            number: 0,
            diff: 1
        }

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.setDiff = this.setDiff.bind(this);

    }
    onIncrement(diff){
        this.setState({
            number: this.state.number + diff
        })
    }
    onDecrement(diff){
        this.setState({
            number: this.state.number - diff
        })
    }

    setDiff(e){
        this.setState({
            diff: e.target.value
        })
    }

    render() {
        return (
            <div className="Counter">
                <p className="InputField">
                    <input type="text" onChange={this.setDiff}/>
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