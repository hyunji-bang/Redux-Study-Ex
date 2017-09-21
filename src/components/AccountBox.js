import React from 'react';

const AccountBox = (props) => {
    console.log('this.props : ', props)

    const AccountList = (
        props.accountData.map(({type, money, result}, i) => (
            <tr key={i}>
                <td>{type === 'deposit' ? money : ''}</td>
                <td>{type === 'withdraw' ? money : ''}</td>
                <td>{result}</td>
            </tr>
        ))
    )

    return (
        <div className="AccountList">
            <table>
                <thead>
                    <tr>
                        <th>입금</th>
                        <th>출금</th>
                        <th>잔액</th>
                    </tr>
                </thead>
                <tbody>
                    {AccountList}
                </tbody>
            </table>
        </div>
    )
}
export default AccountBox;
