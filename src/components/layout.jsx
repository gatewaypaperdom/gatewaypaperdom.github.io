import {Outlet} from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';

const Layout = () => {
    return (
        <div className="flex flex-col items-center text-center min-h-screen bg-slate-100">
            <Navbar />
                <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;