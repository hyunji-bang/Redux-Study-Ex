import React from 'react';
import InputBox from '../components/InputBox';
//import AccountBox from '../components/AccountBox';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            remain: 0,
            save: 0,
            take: 0
        };
        this.saveMoney =this.saveMoney.bind(this);
        this.takeMoney =this.takeMoney.bind(this);
    }
    saveMoney = number => {
        this.setState({
            save: +this.state.remain + +number
        });
    }
    takeMoney = number => {
        this.setState({
            take: this.state.remain - number
        });
    }

    render(){
        return (
            <div className="App">
                <InputBox 
                    saveMoney={this.saveMoney}
                    takeMoney={this.takeMoney}/>
                <div className="AccountBox">
                    <table>
                        <thead>
                            <th>입금</th>
                            <th>출금</th>
                            <th>잔액</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.save}</td>
                                <td>{this.state.take}</td>
                                <td>{this.state.remain}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default App;

const AccountBox = () => (
    <div className="AccountBox">
        <table>
            <thead>
                <th>입금</th>
                <th>출금</th>
                <th>잔액</th>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.save}</td>
                    <td>{this.state.take}</td>
                    <td>{this.state.remain}</td>
                </tr>
            </tbody>
        </table>
    </div>
)