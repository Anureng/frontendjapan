import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-lg mb-4">Have questions or feedback? Reach out to us!</p>
                        <p className="text-lg">Email: info@example.com</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-lg hover:text-gray-400 transition duration-300 ease-in-out">Facebook</a>
                            <a href="#" className="text-lg hover:text-gray-400 transition duration-300 ease-in-out">Twitter</a>
                            <a href="#" className="text-lg hover:text-gray-400 transition duration-300 ease-in-out">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 Japan Job Opportunities. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
