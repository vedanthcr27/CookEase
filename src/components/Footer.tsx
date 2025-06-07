import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-8 h-8 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-800">CookEase</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Your ultimate destination for authentic Indian recipes, cooking tips, and culinary adventures. Making Indian cooking accessible and enjoyable for everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Search by Ingredients
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <Mail size={20} />
                <a href="mailto:contact@cookease.com" className="hover:text-orange-500 transition-colors">
                  contact@cookease.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone size={20} />
                <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} CookEase. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-600 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-600 hover:text-orange-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;