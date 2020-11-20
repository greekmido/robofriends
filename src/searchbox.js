import React , {Component} from 'react';
import "./App.css";

class SearchBox extends Component{
    
render(){
    return (
        <div>
        <input type="text" className="pa3 ba b--green bg-lightest-blue" placeholder="search cool robots"
        onChange={this.props.onsearching} />
        </div>
    )
}
}

export default SearchBox;