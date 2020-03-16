import React from "react";
import OperatorDropdown from "./operator-dropdown";
import OperationDropdown from "./operation-dropdown";
import FieldDropdown from "./fields-dropdown";
import SubGroup from "./sub-group";
import Group from "./group";
import * as CONSTANTS from '../../utils/constants'
import {
    isUndefinedOrNull
} from "../../utils/utils";
import {
    getDefaultGroup
} from "../../utils/query-builder";


class QueryBuilder extends React.PureComponent {

    constructor(props) {
        super(props);
        const options = this.props.options;

        this.state = { options: options, conditions: [this.renderQueryRow()], groups: getDefaultGroup() };
    }

    // newCondition(){
    //     this.groups = [this.renderGroup()]
    //     conditions = [this.renderQueryRow(),this.renderQueryRow()]
    // }

    // Component lifecycle methods started
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }
    // Component lifecycle methods end

    // Component render methods started

    renderQueryRow = () => {
        return (
            <div className="VS-Query-Row">
                <FieldDropdown options={this.props.options}></FieldDropdown>
                <OperationDropdown></OperationDropdown>
                <input type="text"
                    value=""
                    className=""
                    placeholder=""
                />
            </div>
        )
    }

    renderGroup = () => {
        return (
            //       <div >
            //       <fieldset>
            //           <OperatorDropdown></OperatorDropdown>
            //           <button onClick = {this.addCondition}>Add condition</button>
            //           <button onClick={this.addGroup}>Add Group</button>
            //           {
            //               this.renderQueryRow()
            //               //this.state.conditions
            //           }
            //           {
            //               this.renderQueryRow()
            //               //this.state.conditions
            //           }
            //           {
            //               this.renderQueryRow()
            //               //this.state.conditions
            //           }
            //       </fieldset>
            //   </div>
            <div>
                <SubGroup></SubGroup>
            </div>
        )
    }

    addCondition = () => {
        console.log("add condition");
        this.setState(state => ({
            conditions: [
                ...state.conditions,
                this.renderQueryRow()
            ]
        }))
    }
    addGroup = () => {
        console.log("add group");
        return (
            <div className="VS-Query-Row">
                <SubGroup></SubGroup>
            </div>
        )
        // console.log("add group");
        // this.setState(state => ({
        //   conditions : [
        //     ...state.conditions,
        //     this.renderGroup()
        //   ]
        // }))
    }

    closeGroup = () => {
        console.log("Close group");
    }

    renderDefaultGroup = (group) => {
        console.log('group ', group);
        return (
            <Group options={this.props.options} group={group} />
        );
    }

    render() {
        const { fields } = this.props.options;
        const { groups } = this.state;
        return (
            <div>
                {
                    ((groups)? groups.map((item, index) => this.renderDefaultGroup(item)) : '')
                }
            </div>
        );
    }
    // Component render methods end
}

export default QueryBuilder;