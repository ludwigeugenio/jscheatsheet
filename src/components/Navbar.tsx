import Toggle from "./DarkModeToggle"
import "./Navbar.css"


const Navbar: React.FC = () => {
    return <div className="navbar">
        <h1 className='header'>JavaScript Cheat Sheet</h1>
        <Toggle />
    </div>
}

export default Navbar