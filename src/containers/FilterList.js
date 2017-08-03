import React, { Component } from 'react';

export class FilterList extends Component {
    render() {
        const Frameworks = [ 'React', 'Vue', 'Angular', ];
        return (
            <div className="FilterList">
                <h2>Filter List</h2>
                <ul>
                    { Frameworks.map( ( item, index, array ) => <li>{item}</li> ) }
                </ul>
            </div>
        )
    }
};