import { useState } from "react";
import './Kumaran.css'

function Kumaran() {
    let [name, setName] = useState("")
    let [inputValue, setInputValue] = useState(name);
    const handleEnter = () => {setName(inputValue);}
    return (
        <>
        <center>
        <input type="text" id="name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        &nbsp;<button onClick={handleEnter}>Enter</button>
        <h1>My name is {name}</h1>
        </center>
        </>
    ) 
}
export default Kumaran