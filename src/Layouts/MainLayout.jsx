import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header>    </Header>
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;