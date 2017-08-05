import React from 'react';

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
                    <td>{this.props.save}</td>
                    <td>{this.props.take}</td>
                    <td>{this.props.remain}</td>
                </tr>
            </tbody>
        </table>
    </div>
)
export default AccountBox;
