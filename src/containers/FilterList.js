import React, { Component } from 'react';

const Frameworks = ['React', 'Vue', 'Angular'];

const Filter = () => {
    return (
        <ul>
            {Frameworks.map((item, index) => <li key={index}>{item}</li> )}
        </ul>
    )
}

export class FilterList extends Component {
    render() {
        return (
            <div className="FilterList">
                <h2>Filter List</h2>
                    {/*{ Frameworks.map( ( item, index, array ) => <li>{item}</li> ) }*/}
                    <Filter/>
            </div>
        )
    }
};