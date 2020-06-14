import React, { useState } from 'react';

function HelloWord() {
    let [frase, setFrase] = useState("Olá mundo");
    //let frase = "Olá Mundo";
    return(
        <>
            <h1>{ frase }</h1>
            <button onClick={e => setFrase("fui Alterado")}>Alterar Frase</button>
            {/* <button onClick={e => frase = "fui Alterado"}>Alterar Frase</button> */ }
        </>
    )
}

export default HelloWord;