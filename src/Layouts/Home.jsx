import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from './Pages/RightAside';

const Home = () => {
    return (
        <div>
            
            <header>
                  <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto'>

                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default Home;<h2>This is a home page</h2>