import React from "react";
import './Dice.css';

const Dice = props => {
    
    return(
        <i className={`Dice fas fa-dice-${props.face} ${props.rolling ? 'shaking' : ''}`}></i>
    )
}

export default Dice;