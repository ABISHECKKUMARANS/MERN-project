import React, { useState, useMemo } from "react";

function App() {
    let [number, setNumber] = useState(0)
    let [dark, setDark] = useState(false)

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
            padding: '10px',
            marginTop: '10px'
        }
    }, [dark])

    return (
        <div>
            <input 
                type="number" 
                value={number} 
                onChange={(e) => setNumber(e.target.value)} 
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle Theme
            </button>
            <div style={themeStyles}>
                <h2>Number: {number}</h2>
            </div>
        </div>
    )
}

export default App;