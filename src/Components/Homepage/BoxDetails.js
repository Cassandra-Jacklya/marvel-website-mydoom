import React from "react";

export default function BoxDetails (props) {
    return (
        <div className="slide-left">
           Character: {props.name}
           <hr />
           Short Bio: {props.bio}
           <hr />
           Backstory: {props.story}
           <hr />
           Famous saying: {props.quote}
        </div>
    )
}