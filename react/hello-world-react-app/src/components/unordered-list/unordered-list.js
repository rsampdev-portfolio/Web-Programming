import React from 'react';
import '../unordered-list/unordered-list.css';

class UnorderedList extends React.Component {
    render() {
        const list = this.props.listItems.map((listItem, index)=> <li key={index}>{listItem}</li>);
        
        return (
            <ul>
               {list}
            </ul>
        )
    }
}

export default UnorderedList;