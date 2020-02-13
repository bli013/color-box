import React, {Component} from 'react';
import ButtonBox from './ButtonBox.js'
class Addbutton extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        let boxList=[<ButtonBox />,<ButtonBox />]
        if(!this.state.render){
            return (
                <div>
                <button onClick={this.renderChange}> {this.state.render ? "Delete" : "Add"} {boxList}
                </button>

                </div>
            )
        }
        return(
            <button onClick={this.renderChange}> {this.state.render ? "Delete" : "Add"}
            </button>
        )
    }
}
export default Addbutton;
