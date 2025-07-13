import React from "react";
import cities from './data/cities';


function App() {
    return (
        <div>
            <div>
                <div className="grid lg:grid-cols-2">
                    <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full">
                        <img className="h-10" src="image/logo.png" alt="Workcation" />
                        <img
                            className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-cover lg:hidden"
                            src="image/images.jpeg"
                            alt="Woman Workcation on the beach"
                        />
                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl">
                            You can work from anywhere.
                            <br className="hidden lg:inline" />
                            <span className="text-indigo-400">Take advantage of it</span>
                        </h1>
                        <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                            Workcation helps you find work-friendly rentals in beautiful
                            locations so you can enjoy some nice weather even when you're not on vacation.
                        </p>
                        <div className="mt-4 space-x-1 sm:mt-6">
                            <a className="inline-block  px-5 py-3 rounded-lg focus:outline-none focus:ring focus:ring-offset-2 focus:ring-opacity-50 uppercase tracking-wider font-semibold text-sm sm:text-base;
    shadow-lg hover:-translate-y-0.5 transform transition bg-indigo-500 hover:bg-indigo-400 focus:ring-indigo-500 active:bg-indigo-600 text-white" href="">
                                Book your escape
                            </a>
                        </div>
                    </div>
                    <div className="hidden relative lg:block">
                        <img
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src="image/images.jpeg"
                            alt="Woman Workcation on the beach"
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 py-12 bg-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Popular Destinations</h2>
                <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore</p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cities.map((city, index) => (
                        <div key={index} className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden ">
                            <img
                                src={city.imageUrl}
                                alt={city.imageAlt}
                                className="h-32 w-32 flex-shrink-0"
                            />
                            <div className="px-6 py-4">
                                <h3 className="text-lg font-semibold text-gray-800">{city.city}</h3>
                                <p className="text-gray-600 mt-1">${city.averagePrice} / night average</p>
                                <p className="text-sm text-indigo-500 hover:text-indigo-400 font-semibold">
                                    Explore {city.propertyCount} properties</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}
export default App;
