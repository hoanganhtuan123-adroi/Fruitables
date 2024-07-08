import { Outlet } from 'react-router-dom';
import Nav from "../component/Nav/Nav";
import Footer from "./Footer/Footer";
function Layout(){
    return (
        <>
            <Nav/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default Layout;