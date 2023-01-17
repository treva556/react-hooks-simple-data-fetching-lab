import React, { useState, useEffect } from 'react'


const BASE_URL = "https://dog.ceo/api/breeds/image/random"
function App() {
    const [image, setImage] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch(BASE_URL)
            .then(r => r.json())
            .then(data => {
                setImage(data.message)
                setIsLoading(true)
            })
    }, [])

    if (!isLoading) return <p>Loading...</p>
    return (
        <div>
            <img src={image} alt="A Random Dog" />
        </div>
    )
}

export default App
