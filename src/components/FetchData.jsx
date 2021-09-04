import React from 'react'
import "../App.css"
import useFetch from '../hooks/useFetch'


const FetchData = () => {
    const URL = "https://api.kanye.rest";
    const { isLoading, errorMessage, apiData } = useFetch(URL);
    console.log(apiData);
    if (isLoading) return (
        <div className="App">
            <p>Loading data...</p>
        </div>
    )
    return (
        <div className="App">
            <h3>API DATA</h3>
            {errorMessage ? <p>{errorMessage}</p> : <p>{apiData}</p>
            }
        </div>
    )
}

export default FetchData
