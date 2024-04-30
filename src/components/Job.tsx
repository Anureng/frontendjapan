import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

interface DATAI {
    [x: string]: any;
    CompanyName: string;
    Description: string;
    Location: string;
    Name: string;
}

const Job = () => {
    const [data, setData] = useState<DATAI>();
    const [loading, setLoading] = useState(false)
    const params = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://japanbackend.onrender.com/Job/${params.id}`
                );
                setData(response.data);
                setLoading(true)
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const handleApply = () => {
        alert('You have applied for this job!');
    };

    return (
        <>
            <Navbar />
            <div
                className="h-screen bg-cover bg-center flex items-center justify-center"
            >
                <div className="max-w-2xl mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
                    {
                        loading ? (<div>
                            {data && (
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-800">
                                        {data.Name}
                                    </h1>
                                    <p className="mt-2 text-lg text-gray-700">
                                        {data.CompanyName}
                                    </p>
                                    <p className="mt-2 text-lg text-gray-700">
                                        {data.Location}
                                    </p>
                                    <div className="border-t border-gray-300 mt-4 pt-4">
                                        <h2 className="text-2xl font-bold text-gray-800">
                                            Description:
                                        </h2>
                                        <p className="mt-2 text-lg text-gray-700">
                                            {data.Description}
                                        </p>
                                    </div>
                                    <button
                                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                        onClick={handleApply}
                                    >
                                        Apply
                                    </button>
                                </div>
                            )}
                        </div>) : "Loading"
                    }

                </div>
            </div>
        </>
    );
};

export default Job;
