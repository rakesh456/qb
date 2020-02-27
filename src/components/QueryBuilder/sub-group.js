import React from "react";
import OperatorDropdown from "./operation-dropdown";
import OperationDropdown from "./operation-dropdown";
import FieldDropdown from "./fields-dropdown";
import QueryBuilder from "./index"

class SubGroup extends React.PureComponent {
    indx = -1;

    constructor(props) {
        super(props);
        const options = this.props.options;
        this.closeCondition = this.closeCondition.bind(this);
        this.state = { options: options, conditions:[], subGroups: []};
    }
    componentDidMount(){
        var condition = [];
        condition.push({id:1});
        condition.push({id:2})
        this.setState({
            conditions:condition
        })
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

    closeGroup=(group)=>{
        console.log("Close group");
        group = null;
    }

    closeCondition=(id)=>{
         console.log("Close condition",id);
         var newData = this.state.conditions.filter(( obj )=> {
            return obj.id !== id;
          });
          this.setState({
            conditions:newData
          })
    //    // const id = Number(e.currentTarget.id);
    //     console.log(id, typeof(id));
    //     this.state.conditions.splice(id,1);
    //     console.log(this.state.conditions)
    //     this.indx = this.indx-1;
    }

      renderGroup = (element) => {
          return(this.renderQueryRow(element.id))
      }
      renderSubGroup = () => {
          console.log(this.props.options);
          return(
        <div style={{marginLeft:'50px'}}>
            <SubGroup options={this.props.options}></SubGroup>
            
        </div>)
      }

      renderQueryRow = (id) => {

        this.indx = this.indx+1;
        return (
            <div key={this.indx} className="VS-Query-Row">
                <FieldDropdown options={this.props.options}></FieldDropdown>
                <OperationDropdown></OperationDropdown>
                <input type="text"
                    value=""
                    className=""
                    placeholder=""
                />
                <button id={id} onClick={this.closeCondition(id)}>Close</button>
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
        console.log(this.state.conditions);
        return (
                <div style={{border:'1px solid black'}}>
                    <OperatorDropdown></OperatorDropdown>
                    <button onClick = {this.addCondition} >Add condition</button>
                    <button onClick={this.addSubGroup}>Add Sub Group</button>
                    <button onClick={() => this.closeGroup(this)}>Close</button>
                    {
                        this.state.conditions.map((element,index)=>
                            this.renderGroup(element)
                        )
                    }
                    {
                        this.state.subGroups
                    }
                </div>
        )
    }

}
export default SubGroup;