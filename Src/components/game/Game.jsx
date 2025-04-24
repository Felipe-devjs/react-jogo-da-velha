import { useState } from "react"
import GameOption from "../gameOption/GameOption"
import styles from './Game.module.css'

function Game () {
    const [gameState, setGameState] = useState(Array(9).fill(0))
    console.log(gameState)
    return (
        <div className={styles.game}>
            {
                gameState.map((value, pos) => 
                <GameOption 
                key={`game-option-pos-${pos}`}
                status={value}       
            />
            )
            }
            
        </div>
    )
}


export default Game