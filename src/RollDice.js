import React, { useState } from "react";
import Dice from "./Dice";
import './RollDice.css';

const RollDice = () => {

    const [diceState, setDiceState] = useState({
        dice1: "one",
        dice2: "one"
    });

    const [shakeState, setShakeState] = useState({
        rolling: false
    })

    const defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };

    const handleClick = () => {
        const newDice1 = defaultProps.sides[Math.floor(Math.random() * defaultProps.sides.length)];
        const newDice2 = defaultProps.sides[Math.floor(Math.random() * defaultProps.sides.length)];
        
        setDiceState({
            dice1: newDice1,
            dice2: newDice2
        })
        setShakeState({
            rolling: true
        })
        setTimeout(()=>{
           setShakeState({ rolling: false });
        }, 1000) 
    }

    return (
        <div className="RollDice">
            <div className="RollDice-container">
                <Dice face={diceState.dice1} rolling={shakeState.rolling} />
                <Dice face={diceState.dice2} rolling={shakeState.rolling}/>
            </div>
            <button onClick={handleClick} disabled={shakeState.rolling}>
                {shakeState.rolling ? 'Rolling...' : 'Roll Dice!'}
            </button>
        </div>
    )
}
export default RollDice;