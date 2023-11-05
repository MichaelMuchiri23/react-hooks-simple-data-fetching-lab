// create your App component here
import React, { useState, useEffect } from "react";

function App(){
    const [image, setImage] = useState("")
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setImage(data.message))
    }, [])

    return(
        image ? <img src={image} alt="A Random Dog" /> : <p>Loading...</p>
    )
}

export default App