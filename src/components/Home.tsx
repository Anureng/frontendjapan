import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="relative">
            <div className="absolute top-0 w-full">
                <Navbar />
            </div>
            <div className="h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Explore Job Opportunities in Japan</h1>
                    <p className="text-lg mb-6">Find your dream job in Japan with our comprehensive job listings.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <a href="/Job">
                            Explore Jobs
                        </a>
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Why Work in Japan?</h2>
                    <p className="text-lg mb-6 text-gray-700">Japan offers a unique blend of traditional culture and modern technology. Working in Japan can provide opportunities for personal and professional growth, as well as an immersive cultural experience.</p>
                    <p className="text-lg mb-6 text-gray-700">With a strong economy and diverse industries ranging from technology to hospitality, there are job opportunities for individuals with various skill sets and backgrounds.</p>
                    <p className="text-lg mb-6 text-gray-700">Explore job listings in Japan today and take the first step towards an exciting new career adventure!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
