import ColoredCircles from "./ColoredCircles"
import React from "react"

const ColoredButtons = (props) => {
    return (
        <div>
            {props.colors.map(color => (
                <button 
                onClick={() => props.addCircle(color)}
                style={{backgroundColor: color}} >
                {color}</button>
            ))}
        </div>
    )
}

export default ColoredButtons;