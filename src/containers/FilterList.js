import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';


const FRAMEWORKS = ['React', 'Vue', 'Angular'];

export class FilterList extends Component {
    render() {

        const { filterBy, updateFilter } = this.props;
        console.log(this.props);
        return (
            <div className="FilterList">
            <h2>Filter List</h2>
                <p className="InputField">
                    <input type="text" placeholder={this.props.filterBy} onChange={updateFilter}/>
                </p>

                <List items={FRAMEWORKS} filterBy={filterBy}/>
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
}

const mapStateToProps = (state) => {
    return {
        filterBy: state.filterBy
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        updateFilter: (ev) => dispatch(setFilter(ev.target.value))
    }
}

FilterList = connect(mapStateToProps, mapDispatchToProps)(FilterList);


