import React from 'react';

class InputBox extends React.Component{
    constructor(props){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            number: 0
        };
    }
    handleInput = e => {
        console.log(e.target.value);
        var inputNumber = e.target.value;
        this.setState = {
            number: inputNumber
        }
    }

    render(){
        console.log('this.props:', this.props)
        return (
            <div className="InputBox">
                <input type="number" onChange={this.handleInput}/>

                <button
                    onClick={this.props.saveMoney}>
                    입금
                </button>
                <button 
                    onClick={this.props.takeMoney}>
                    출금
                </button>
            </div>
        )
    }
}

export default InputBox;
