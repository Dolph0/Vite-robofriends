import React from "react";
import "tailwindcss";

const Card = (props) => {
    return(
        <div class="200bg-green- inline-block rounded-lg p-4 transition-transform hover:scale-103 shadow-sm m-1 text-center">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robots"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card