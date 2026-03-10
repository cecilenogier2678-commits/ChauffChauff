import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import '../../App.css';

const Layout = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <main className="main-content">
                <Topbar />

                {/* Child pages will render here via Outlet */}
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
