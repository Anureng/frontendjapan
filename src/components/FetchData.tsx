import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

interface DATAI {
    [x: string]: any
    CompanyName: string,
    Description: string,
    Location: string,
    Name: string
}

const FetchData = () => {
    const [data, setData] = useState<DATAI[]>([])
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://japanbackend.onrender.com/allJob')
                setData(response.data)
                setLoading(true)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])

    const filteredData = data.filter((el) =>
        el.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.CompanyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.Location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>

            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="border border-gray-300 rounded-md p-2 mb-4 w-2/5"
                />

                <div>
                    {
                        loading ? (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {filteredData.map((el) => (
                                <div key={el._id} className='border border-gray-300 rounded-md p-4'>
                                    <h3 className="text-lg font-medium mb-2">{el.Name}</h3>
                                    <p className="text-gray-500 mb-2">{el.CompanyName}</p>
                                    <p className="text-gray-500 mb-2">{el.Location}</p>
                                    <a href={`https://japanbackend.onrender.com/Job/${el._id}`} className="text-blue-500 hover:text-blue-700">Explore</a>
                                </div>
                            ))}
                        </div>) : (
                            <div className='flex items-center justify-center h-screen'>Loading...</div>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default FetchData
