import React ,{Component} from 'react';
import './Card.css';
class Card extends Component{
    render(){
        return (

         <div className="card  bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
         <img src={`https://robohash.org/${this.props.name}?200*200`} alt="robotCard"></img>
                <div>{this.props.name}</div>
                <div>{this.props.email}</div>
               </div>              
        );
    }
}
export default Card;