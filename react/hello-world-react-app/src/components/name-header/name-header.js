import React from 'react';
import '../name-header/name-header.css';

class NameHeader extends React.Component {
    render() {
        const name = this.props.name;

        return (
            <h1>{name}</h1>
        )
    }
}

export default NameHeader;