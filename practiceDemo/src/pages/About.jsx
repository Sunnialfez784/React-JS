import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 md:p-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Building modern web applications with speed and efficiency.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower developers to create beautiful and responsive user interfaces without the overhead of writing custom CSS. We leverage the power of utility-first frameworks like [Tailwind CSS](https://tailwindcss.com/) to streamline the development process and encourage consistent design systems.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
            Join Our Team
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are always looking for passionate developers. Check out our careers page or connect with us on social media!
          </p>
        </section>

        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
