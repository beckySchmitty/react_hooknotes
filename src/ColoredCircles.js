import React, {useState} from "react"
import Circle from "./Circle"
import ColoredButtons from "./ColorButtons"


function getRandom(min=0, max=80) {
    return Math.random() * (max-min) + min;
}

const ColoredCircles = () => {
    const [circles, setCircles] =  useState([])

    // need to change array (make copy and update) so React knows there was a chance and will cause re render
    const addCircle = (color) => {
        setCircles([...circles, {color, x: getRandom(), y: getRandom()} ])
    }

    // need to change array (make copy and update) so React knows there was a chance and will cause re render
    const changePosition = idx => {
        setCircles(circles => {
            const copy = [...circles];
            copy[idx].x = getRandom();
            copy[idx].y = getRandom();
            return copy;
        })
    }

    // OPTION #2
    // const changePoition = idx => {
    //     setCircles(circles => (
    //         circles.map((circle, i) => (
    //             i === idx ?
    //             {...circle, x: getRandom(), y: getRandom()} 
    //             : circle
    //         ))
    //     ))
    // }


    return (
    <div>
        <ColoredButtons colors={["peachpuff", "red"]} addCircle={addCircle} />
        <ColoredButtons colors={["lavender", "teal"]} addCircle={addCircle} />

        {circles.map(({color, x,y}, idx) => (
            <Circle changePosition={changePosition} 
            color={color} 
            x={x} 
            y={y} 
            idx={idx} 
            key={idx}/>
        ))}

    </div>
    )
}

export default ColoredCircles;