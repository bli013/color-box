import React, {Component} from 'react';
import Addbutton from './Addbutton.js'

class ButtonBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            color: "white",
            render: true
        }
    }
    renderChange = () => {
        this.setState(prevState => ({
            render: !prevState.render
        }));
    }
    handleChange = () => {
        if(this.state.color=== "white"){
            this.setState({ color: "green"})
        }
        else if(this.state.color=== "green"){
            this.setState({ color: "blue"})
        }
        else if(this.state.color=== "blue"){
            this.setState({ color: "yellow"})
        }
        else if(this.state.color=== "yellow"){
            this.setState({ color: "red"})
        }
        else if(this.state.color=== "red"){
            this.setState({ color: "orange"})
        }
        else if(this.state.color=== "orange"){
            this.setState({ color: "green"})
        }
    }
    render(){
        if(!this.state.render){
            return (
                null
            )
        }
        return(
            <div>
             <button className="Box" onClick = {this.handleChange} style={{backgroundColor: this.state.color}}>
                {this.state.color}
            </button>
            <button onClick={this.renderChange}> {this.state.render ? "❌" : "Add"}
            </button>
            </div>
        )
    }
}
export default ButtonBox;
