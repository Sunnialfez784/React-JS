import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 flex flex-col">
        <section className="bg-indigo-700">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Rapidly build modern websites with <span className="block text-indigo-300">React & Tailwind CSS</span>.
              </h1>
              <p className="mt-4 max-w-lg mx-auto text-xl text-indigo-200">A simple and effective way to create beautiful, responsive user interfaces.</p>
              <div className="mt-10 flex justify-center">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default HomePage;
