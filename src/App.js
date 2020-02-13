import React, {Component} from 'react';
import './App.css';
import ButtonBox from './ButtonBox.js'
//import Headerr from './Header.js'
//import Addbutton from './Addbutton.js'

class App extends Component {
    constructor(props){
    super(props)
    this.state = {
        buttonList: []
        }
    }

    onAddBtnClick = () => {
        let {buttonList} = this.state
        buttonList.push(<ButtonBox key={buttonList.length}/>)
        this.setState({buttonList: buttonList})
    }
    render(){
        let {buttonList} = this.state
        return (
            <div>
                <button className="Add-me-button" onClick= {this.onAddBtnClick}> 😜 Click Me to add😜</button>
                <div className="Button-list">
                {buttonList}
                </div>
                <ButtonBox />
        </div>
      );
    }
}
export default App;
