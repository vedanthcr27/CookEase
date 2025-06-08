import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">About CookEase</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making cooking easy and enjoyable for everyone, especially students and bachelors.
          </p>
        </div>
        
        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}></div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                CookEase was created to solve a common problem: students and bachelors struggling to cook with limited ingredients and time.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to make cooking simple, fun, and accessible for everyone, especially those living away from home.
              </p>
              <p className="text-gray-600">
                We believe that cooking shouldn't be complicated or require special ingredients. With CookEase, you can make delicious meals with what's already in your kitchen.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-800 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Simple Cooking</h3>
              <p className="text-gray-600">
                Easy-to-follow recipes that anyone can make, even with basic cooking skills.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Student-Friendly</h3>
              <p className="text-gray-600">
                Recipes designed for busy students and bachelors with limited time and resources.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Smart Search</h3>
              <p className="text-gray-600">
                Find recipes based on ingredients you have, making cooking more convenient.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-1">Vedanth CR</h3>
              <p className="text-gray-500 mb-3">Lead Developer</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-1">Varsha M</h3>
              <p className="text-gray-500 mb-3">UI/UX Designer</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-1">Varsha AY</h3>
              <p className="text-gray-500 mb-3">Content Curator</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-1">Yashwanth E</h3>
              <p className="text-gray-500 mb-3">Backend Developer</p>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-orange-500 rounded-lg shadow-md p-8 text-center text-white">
          <h2 className="text-2xl font-serif font-bold mb-4">Get in Touch</h2>
          <p className="text-orange-100 mb-6 max-w-xl mx-auto">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <a href="mailto:contact@cookease.com" className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-medium rounded-full hover:bg-orange-50 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 