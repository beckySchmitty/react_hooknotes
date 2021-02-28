import React from "react";

const NumberItem = ({ number, remove }) => {
  const handleRemove = () => {
    remove(number)
  }
  return (
    <li>
      <button onClick={handleRemove}>{number}</button>
      {/* OPTION #2 */}
      {/* and you could not have to create handleRemove */}
      {/* <button onClick={remove}>{number}</button> */}

    </li>
  )
}

export default NumberItem;