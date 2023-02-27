import React from 'react'
import Button from "./Button"
const ButtonList = () => {
  const buttonNames = [
    "All",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Gaming",
    "Bollywood",
    "Comedy",
    "Hockey"
  ];
  return (
    <div className="flex">
      {buttonNames.map((name) =>
        <Button key={name} name={name} />)}
    </div>
  )
}
export default ButtonList;