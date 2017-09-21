import React from 'react';
import InputBox from '../components/InputBox';
import AccountBox from '../components/AccountBox';

class App extends React.Component {
    state = {
        accountData: []
    };


    // 2번째 방법 ---------------------------------------------------
    calculate = (type, money) => {
        money = money * 1; //숫자형으로 바꿔주기;
        const prevAccount = this.state.accountData;
        const prevLength = prevAccount.length;
        const lastResult = prevLength ? (prevAccount[prevLength - 1].result) : 0;   // lastResult state로 따로 빼도 됨.

        this.setState({
            accountData: [
                ...this.state.accountData, {
                    type,
                    money,
                    result: lastResult + (type === 'deposit' ? 1 : -1 ) * money
                }
            ]
        })
    }

    render() {

        return (
            <div>
                <InputBox calculate={this.calculate.bind(this)}/>
                <AccountBox
                    accountData={this.state.accountData}
                />
            </div>
        );
    }
}

export default App;