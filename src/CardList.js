import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    // PIERWSZA OPCJA
    // const cardsArray =robots.map((user, i)=> {
    //    return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} username= {robots[i].username} email={robots[i].email} /> 
    // });
    
    // return (
    //     <div>
          
    //       {cardsArray}
           
    //     </div>
    // )
    // DRUGA OPCJA
    return (
        <div>
          {
            robots.map((robot,i) => {

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

export default CardList;
