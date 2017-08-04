import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';


const FRAMEWORKS = ['React', 'Vue', 'Angular'];

class FilterList extends Component {

    handleOnChange = (qerere) => {
        const aa = qerere.target.value;
        this.props.ccc(aa);
    };

    render() {

        const { bbb } = this.props;
        console.log(this.props);
        return (
            <div className="FilterList">
            <h2>Filter List</h2>
                <p className="InputField">
                    <input type="text" placeholder={this.props.filterBy} onChange={this.handleOnChange}/>
                </p>

                <List items={FRAMEWORKS} filterBy={bbb}/>
            </div>
        )
    }
}

const List = ({ items, filterBy }) => {
    return (
        <ul>
            {items
                .filter(item => item.indexOf(filterBy) > -1)
                .map((item, index) => <li key={index}>{item}</li> )}
        </ul>
    )
};

const w = (aaa) => {
    return {
        bbb: aaa.filterBy
    }
};

const e = ( c ) => {
    return {
        ccc: (value) => c(setFilter(value))
    }
};

const QQQ = connect(w, e)(FilterList);

export default QQQ;