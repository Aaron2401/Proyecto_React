import { useState } from "react"

function Button() {
    const [nameStudent,setNameStudent]=useState("Aaron")
    const showNameStudent=()=>{

        setNameStudent('Aaron')
    }
    return (
        <>
            <h1>Ejemplo de boton</h1>
            {nameStudent}
            <button className="btn btn-dark" onClick={showNameStudent}>Dar clic</button>
        </>
    )
}

export default Button