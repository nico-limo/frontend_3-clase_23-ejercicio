import React from 'react'
import "../App.css"
import useLocalStorage from '../hooks/useLocalStorage';

const LocalStorage = () => {
    const [name, setName] = useLocalStorage('username', '');
    const handleChange = (event) => {setName(event.target.value)};

    return (
        <div className="App">
            <input value={name} onChange={handleChange} />
        </div>
    )
}

export default LocalStorage
