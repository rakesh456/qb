import React from "react";
import OperatorDropdown from "./operation-dropdown";
import OperationDropdown from "./operation-dropdown";
import FieldDropdown from "./fields-dropdown";

class SubGroup extends React.PureComponent {

    constructor(props) {
        super(props);
        const options = this.props.options;
        this.state = { options: options, conditions:[this.renderQueryRow(), this.renderQueryRow()], subGroups: []};
    }

    addCondition = () => {
        console.log("add condition");
        this.setState(state => ({
          conditions : [
            ...state.conditions,
            this.renderQueryRow()
          ]
        }))
      }

    addSubGroup = () => {
        this.setState(state => ({
            subGroups: [
                ...state.subGroups,
                this.renderSubGroup()
            ]
        }))
    }

      renderGroup = () => {}

      renderSubGroup = () => {
          return(
        <div>
            <SubGroup options={this.props.options}></SubGroup>
        </div>)
      }

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

    // render() {
    //     const { options } = this.props;
    //     console.log("Entered into the sub group");
    //     return (
    //         <div >
    //       <fieldset>
    //           <OperatorDropdown></OperatorDropdown>
    //           <button onClick = {this.addCondition}>Add condition</button>
    //           <button onClick={this.addGroup}>Add Group</button>
    //           {
    //               this.renderQueryRow()
    //               //this.state.conditions
    //           }
    //       </fieldset>
    //   </div>
    //     )
    // }

    render() {
        return (
                <div style={{border:'1px solid black'}}>
                    <OperatorDropdown></OperatorDropdown>
                    <button onClick = {this.addCondition} >Add condition</button>
                    <button onClick={this.addSubGroup}>Add Sub Group</button>
                    {
                        this.state.conditions
                    }
                    {
                        this.state.subGroups
                    }
                </div>
        )
    }

}
export default SubGroup;