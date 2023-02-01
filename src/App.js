import React from 'react';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import Resume from './components/Resume/Resume';


const App = () => {
    return (
        <div className='w-full h-auto bg-bodyColor text-lightText'>
            <Navbar />
            <div className="max-w-screen-2xl mx-4">
                <Banner />
                <Features />
                <Project />
                <Resume />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App