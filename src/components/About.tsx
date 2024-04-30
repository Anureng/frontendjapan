import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (
        <>
            <Navbar />
            <div className='h-screen flex items-center justify-center'>
                <div className="max-w-2xl mx-auto p-6 bg-gray-100 h-96 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-center mb-6">About Japan</h2>
                    <div className="text-lg leading-relaxed">
                        <p>
                            Japan, often referred to as the Land of the Rising Sun, is a country renowned for its rich culture, stunning landscapes, and technological advancements.
                        </p>
                        <p>
                            From the bustling streets of Tokyo to the serene temples of Kyoto, Japan offers a diverse range of experiences for travelers.
                        </p>
                        <p>
                            Explore the traditional tea ceremonies, admire the beautiful cherry blossoms in spring, or indulge in the exquisite flavors of sushi and ramen.
                        </p>
                        <p>
                            Whether you're fascinated by its ancient traditions or modern innovations, Japan never fails to captivate the imagination.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
