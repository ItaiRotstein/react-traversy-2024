import { Outlet } from "react-router-dom"
import Navbar from '../cmps/Navbar'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
export default MainLayout