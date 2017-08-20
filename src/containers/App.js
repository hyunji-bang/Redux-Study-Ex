import React from 'react';
import InputBox from '../components/InputBox';
import AccountBox from '../components/AccountBox';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            input: 0,
            remain: 0,
            save: 0,
            take: 0
        };
        this.handleInput = this.handleInput.bind(this)
        this.updateSave = this.updateSave.bind(this)
        this.updateTake = this.updateTake.bind(this)
    };
    handleInput = e => {
        this.setState({
            input: e.target.value
        })
    }
    updateSave = input => {
        this.setState({
            save: this.state.save + ( this.state.input * 1 ),
            remain: this.state.remain + ( this.state.input * 1 )
        });
    }
    updateTake = input => {
        this.setState({
            take: this.state.take - ( this.state.input * 1),
            remain: this.state.remain - ( this.state.input * 1)
        });
    }
    render(){
        // console.log(this.state.save);
        return (
            <div className="App">
                <InputBox
                    handleInput={this.handleInput}
                    updateSave={this.updateSave}
                    updateTake={this.updateTake}
                    />
                <AccountBox
                    saveState={this.state.save}
                    takeState={this.state.take}
                    remainState={this.state.remain}
                />
            </div>
        )
    }
}

export default App;