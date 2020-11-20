import React,{ Component } from "react";
import './App.css';
import "./CardList";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./searchbox";
import Scroll from "./scroll.js"
import Error from "./errorboundary.js"
class App extends Component{
  
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchboxvalue:""
    }
    
  }
  
  whenSearchChanges = (happend)=> {
    this.setState({searchboxvalue:happend.target.value});
  }
  render(){
    return (
      <div className="tc">
        <h1 className="f1">ROBO FRIENDS</h1>
        <SearchBox onsearching={this.whenSearchChanges}  />
        <Scroll>
          <Error>
        <CardList robots={this.state.robots} term={this.state.searchboxvalue} />
        </Error>
        </Scroll>
      </div>
    )
  }
}

export default App;
