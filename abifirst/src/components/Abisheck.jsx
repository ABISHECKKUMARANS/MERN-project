import { useState } from "react"  
import './Abisheck.css'
function Abisheck(props) {
  return (
    <>
    <h1>Sum is {parseInt(props.num1) + parseInt(props.num2)}</h1>
    </>
  )
} 
export default Abisheck
