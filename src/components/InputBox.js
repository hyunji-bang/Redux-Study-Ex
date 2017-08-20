import React from 'react';

class InputBox extends React.Component {
    render(){
        return (
            <div className="InputBox">
                <input type="number" onChange={this.props.handleInput}/>
                <button onClick={this.props.updateSave}>
                    입금
                </button>
                <button onClick={this.props.updateTake}>
                    출금
                </button>
            </div>
        )
    }
}

export default InputBox;
