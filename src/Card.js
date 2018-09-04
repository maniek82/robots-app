import React from 'react';

const Card = ({name, username,email, id}) => {
    // const {name, email, id} = props;
    return (
        // <div className=" tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
        //     <img alt="robots"src={`https://robohash.org/${id}?size=100x100`}/>
        //     <div>
        //         <h2>{name}</h2>
        //         {/* <h3>{props.username}</h3> */}
        //         <p>{email}</p>
        //     </div>
        // </div>
        // <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className="tc bg-light-blue  dib br3 pa3 ma3 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=100x100`} 

            className="br-100 h4 w4 dib ba b--red-05 pa2" alt="" title ={` Username: ${username}`}/>
            <h2 className="f3 mb2">{name}</h2>
            <p className="f5 fw4 mid-gray mt0">{email}</p>
        </div>
        /* </article> */

    )
}

export default Card;