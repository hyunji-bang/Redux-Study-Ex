import React from 'react';

const AccountBox = (props) => {

    const AccountList = (
        <tr>
            <td>{props.saveState}</td>
            <td>{props.takeState}</td>
            <td>{props.remainState}</td>
        </tr>
    )
    return (
        <div className="AccountBox">
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
