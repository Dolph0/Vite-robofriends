import React from "react";


const Card = (props) => {
    return(
        <div className="">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robots"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card