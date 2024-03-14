import React from "react";

const LandingPage = () => {
  return (
    <div>
      {/* Header Navbar */}
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Company Logo" className="h-8 mr-4" />
            <ul className="flex">
              <li className="mr-4 hover:text-blue-500 cursor-pointer">Tab 1</li>
              <li className="mr-4 hover:text-blue-500 cursor-pointer">Tab 2</li>
              <li className="mr-4 hover:text-blue-500 cursor-pointer">Tab 3</li>
            </ul>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Component */}
      <section className="relative">
        <img
          src="/hero-background.jpg"
          alt="Hero Background"
          className="w-full h-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Lifespan Tracker</h1>
            <p className="text-lg mb-8 text-white">
              Monitor your health and live healthier lives.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 3 Card Section */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Feature 1</h2>
            <p>Explanation of feature 1 goes here.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Feature 2</h2>
            <p>Explanation of feature 2 goes here.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Feature 3</h2>
            <p>Explanation of feature 3 goes here.</p>
          </div>
        </div>
      </section>

      {/* 3 Card Full Width Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3">
                <img
                  src="/image1.jpg"
                  alt="Image 1"
                  className="w-full h-auto rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                />
              </div>
              <div className="p-6 w-full sm:w-2/3">
                <h2 className="text-xl font-bold mb-4">Card Title 1</h2>
                <p>Text explaining card content goes here.</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3">
                <img
                  src="/image2.jpg"
                  alt="Image 2"
                  className="w-full h-auto rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                />
              </div>
              <div className="p-6 w-full sm:w-2/3">
                <h2 className="text-xl font-bold mb-4">Card Title 2</h2>
                <p>Text explaining card content goes here.</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3">
                <img
                  src="/image3.jpg"
                  alt="Image 3"
                  className="w-full h-auto rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                />
              </div>
              <div className="p-6 w-full sm:w-2/3">
                <h2 className="text-xl font-bold mb-4">Card Title 3</h2>
                <p>Text explaining card content goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
          <div className="accordion">
            {/* FAQ Item 1 */}
            <div className="accordion-item hover:bg-gray-200 cursor-pointer">
              <input type="checkbox" id="faq1" className="hidden" />
              <label
                htmlFor="faq1"
                className="accordion-title flex justify-between items-center mb-4"
              >
                <span>Question 1?</span>
                <svg
                  className="w-4 h-4 fill-current ml-2 transition-transform duration-300 transform accordion-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path className="hidden" id="arrow-up" d="M12 3l8 8H4z" />
                  <path id="arrow-down" d="M4 10l8 8 8-8z" />
                </svg>
              </label>
              <div className="accordion-content">
                <p>Answer to Question 1.</p>
              </div>
            </div>
            {/* FAQ Item 2 */}
            <div className="accordion-item hover:bg-gray-200 cursor-pointer">
              <input type="checkbox" id="faq2" className="hidden" />
              <label
                htmlFor="faq2"
                className="accordion-title flex justify-between items-center mb-4"
              >
                <span>Question 2?</span>
                <svg
                  className="w-4 h-4 fill-current ml-2 transition-transform duration-300 transform accordion-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path className="hidden" id="arrow-up" d="M12 3l8 8H4z" />
                  <path id="arrow-down" d="M4 10l8 8 8-8z" />
                </svg>
              </label>
              <div className="accordion-content">
                <p>Answer to Question 2.</p>
              </div>
            </div>
            {/* FAQ Item 3 */}
            <div className="accordion-item hover:bg-gray-200 cursor-pointer">
              <input type="checkbox" id="faq3" className="hidden" />
              <label
                htmlFor="faq3"
                className="accordion-title flex justify-between items-center mb-4"
              >
                <span>Question 3?</span>
                <svg
                  className="w-4 h-4 fill-current ml-2 transition-transform duration-300 transform accordion-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path className="hidden" id="arrow-up" d="M12 3l8 8H4z" />
                  <path id="arrow-down" d="M4 10l8 8 8-8z" />
                </svg>
              </label>
              <div className="accordion-content">
                <p>Answer to Question 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex justify-between">
          <ul className="flex">
            <li className="mr-4">Policy</li>
            <li className="mr-4">Careers</li>
            <li className="mr-4">About Us</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
