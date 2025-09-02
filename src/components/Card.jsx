import React from "react";


const Card = (props) => {
    return(
        <div className="bg-green-300 inline-block rounded-lg p-3 transition-transform hover:scale-105 text-center">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robots"/>
            <div>
                <h2 className="font-bold">{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card