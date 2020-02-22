import React from 'react';
import SubGroup from './sub-group';

class Group extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { fields } = this.props.options;
        return (            
                <fieldset>
                    <legend>Group:</legend>
                    <SubGroup></SubGroup>
                </fieldset>            
        );

    }
}

export default Group;