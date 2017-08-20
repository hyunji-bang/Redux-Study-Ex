import React from 'react';

const AccountBox = (props) => {
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
                    <tr>
                        <td>{props.saveState}</td>
                        <td>{props.takeState}</td>
                        <td>{props.remainState}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default AccountBox;
