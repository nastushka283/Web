import React from "react";

function Block(props) {
    return (
        <div className="block__wrapper">
            <img  src={props.image} alt="Pencil" className="block__image"/>
            <h3>{props.title}</h3>
            <p className="block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit{props.pMark}</p>
        </div>
    );
}

export default Block;