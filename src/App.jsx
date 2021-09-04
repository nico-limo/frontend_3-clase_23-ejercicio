import Register from "./components/Register"
import FetchData from "./components/FetchData"
import LocalStorage from "./components/LocalStorage"
import "./App.css"

const App = () => {
    return (
        <div className="container">
            <Register />
            <FetchData />
            <LocalStorage />
        </div>
    )
}

export default App
