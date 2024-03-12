import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"

function RootPage(){
    return <>
        <Navbar/>
        <Outlet/>
        <footer className="bg-gray-600">footer</footer>
    </>
}

export default RootPage