import React from 'react';
import { ChefHat, Carrot, Heart, Search, Trophy, Mail } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="py-12 bg-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">About RecipeRover</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting home cooks with delicious recipes based on ingredients they already have.
          </p>
        </div>
        
        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}></div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                RecipeRover was born from a simple problem: standing in front of an open refrigerator, wondering what to cook with the ingredients on hand.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2025, our mission is to reduce food waste, inspire culinary creativity, and bring joy to cooking by connecting people with perfect recipes for the ingredients they already have.
              </p>
              <p className="text-gray-600">
                We believe that cooking shouldn't be complicated or require special trips to the grocery store. With RecipeRover, you can make delicious meals with what's already in your kitchen.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-800 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full text-orange-500 mb-4">
                <Carrot size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Reduce Food Waste</h3>
              <p className="text-gray-600">
                We help you use what you have, reducing food waste and saving money while creating delicious meals.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full text-orange-500 mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Passion for Cooking</h3>
              <p className="text-gray-600">
                We believe everyone can cook amazing food with the right recipes and a bit of guidance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full text-orange-500 mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Smart Solutions</h3>
              <p className="text-gray-600">
                Our ingredient-matching technology helps you discover recipes you might never have found otherwise.
              </p>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-800 text-center mb-8">How RecipeRover Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full text-white font-bold text-lg mb-4">1</div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Enter Your Ingredients</h3>
              <p className="text-gray-600">
                Tell us what ingredients you have available in your kitchen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full text-white font-bold text-lg mb-4">2</div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Discover Recipes</h3>
              <p className="text-gray-600">
                Our algorithm finds recipes that match your available ingredients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full text-white font-bold text-lg mb-4">3</div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Cook & Enjoy</h3>
              <p className="text-gray-600">
                Follow the recipe instructions and enjoy your delicious meal.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-1">Alex Johnson</h3>
                <p className="text-gray-500 mb-3">Founder & Head Chef</p>
                <p className="text-gray-600">
                  Professional chef with a passion for making cooking accessible to everyone.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3770254/pexels-photo-3770254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-1">Maya Rodriguez</h3>
                <p className="text-gray-500 mb-3">Lead Developer</p>
                <p className="text-gray-600">
                  Coding wizard who built our ingredient-matching algorithm from scratch.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-1">James Chen</h3>
                <p className="text-gray-500 mb-3">Food Scientist</p>
                <p className="text-gray-600">
                  Expert in food combinations and flavor profiles to create perfect recipes.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-orange-500 rounded-lg shadow-md p-8 text-center text-white">
          <ChefHat size={48} className="mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-bold mb-4">Get in Touch</h2>
          <p className="text-orange-100 mb-6 max-w-xl mx-auto">
            Have questions, suggestions, or just want to share your RecipeRover success story? We'd love to hear from you!
          </p>
          <a href="mailto:contact@reciperover.com" className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-medium rounded-full hover:bg-orange-50 transition-colors">
            <Mail size={20} className="mr-2" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;