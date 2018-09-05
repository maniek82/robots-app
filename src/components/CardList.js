import React,{Component} from 'react';
import Card from './Card';

class CardList extends Component {

   render() {
    return (
        <div>
          {
            this.props.robots.map((robot,i) => {

                return ( <Card 
                key={robot.id} 
                id={robot.id} 
                name={robot.name} 
                username= {robot.username} 
                email={robot.email}
                address={robot.address.city}
                website = {robot.website} />
                );
                })
          }
           
        </div>
    )

   }
    
}

export default CardList;


 // PIERWSZA OPCJA
    // const cardsArray =robots.map((user, i)=> {
    //    return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} username= {robots[i].username} email={robots[i].email} /> 
    // });
    
    // return (
    //     <div>
          
    //       {cardsArray}
           
    //     </div>
    // )