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
                email={robot.email} />
                );
                })
          }
           
        </div>
    )

   }
    
}

export default CardList;
