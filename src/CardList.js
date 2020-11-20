import React ,{Component} from 'react';
import Card from'./Card.js';
class CardList extends Component{
render(){
    const iteration= this.props.robots.map((user,i) =>{
        let x = new RegExp(this.props.term,"i");
        if(user.name.search(x)>-1){
        return <Card key={i} id={user.id} name={user.name} email={user.email} />
        }else{
            return "";
        }
        });
   return  <div style={{border:"5px"}}> {iteration} </div>
}
    

}
export default CardList;