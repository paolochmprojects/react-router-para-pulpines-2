import { NavLink } from "react-router-dom"

function Navbar() {
    return (<nav className="bg-violet-600">
        <ul className="flex gap-4 text-white">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/help">Help</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>)
}

export default Navbar