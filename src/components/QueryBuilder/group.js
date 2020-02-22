import React from 'react';
import SubGroup from './sub-group';

class Group extends React.PureComponent {

    constructor(props) {
        super(props);        
    }

    render() {        
        return (            
                <fieldset>
                    <legend>Group:</legend>
                    <SubGroup options={this.props.options}></SubGroup>
                </fieldset>            
        );
    }
}

export default Group;