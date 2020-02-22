import React from "react";
import OperatorDropdown from "./operation-dropdown";
import OperationDropdown from "./operation-dropdown";
import FieldDropdown from "./fields-dropdown";

class SubGroup extends React.PureComponent {

    addCondition = () => {
        console.log("add condition");
        this.setState(state => ({
          conditions : [
            ...state.conditions,
            this.renderQueryRow()
          ]
        }))
      }
      addGroup = () => {
          return(
        <div>
            <SubGroup></SubGroup>
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

    render() {
        const { options } = this.props;
        console.log("Entered into the sub group");
        return (
            <div >
          <fieldset>
              <OperatorDropdown></OperatorDropdown>
              <button onClick = {this.addCondition}>Add condition</button>
              <button onClick={this.addGroup}>Add Group</button>
              {
                  this.renderQueryRow()
                  //this.state.conditions
              }
          </fieldset>
      </div>
        )
    }

}
export default SubGroup;