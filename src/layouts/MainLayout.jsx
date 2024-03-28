import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../cmps/Navbar";
import ScrollToTop from '../cmps/ScrollToTop';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <ScrollToTop/>
            <Outlet />
            <ToastContainer/>
        </>
    )
}
export default MainLayout