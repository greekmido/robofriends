import React, { Component } from "react";

class Error extends Component{
    constructor(props){
        super(props);
       this.state={
           hasError:false
       }
    }
    componentDidCatch(){
        this.setState({hasError:true})
    }
    render(){

        if (this.state.hasError){
           return <h1> ops something went wrong</h1>
        }else {
                return this.props.children
        }
            }
}

export default Error