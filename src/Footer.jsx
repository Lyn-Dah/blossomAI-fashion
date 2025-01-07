import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-950 to-current text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Fashion Trends. All rights reserved.</p>
        <p className="mt-2">Follow us on:
          <a href="https://twitter.com" className="ml-2 text-blue-400 hover:text-blue-500 transition duration-200">Twitter</a> |
          <a href="https://facebook.com" className="ml-2 text-blue-600 hover:text-blue-700 transition duration-200">Facebook</a> |
          <a href="https://instagram.com" className="ml-2 text-pink-500 hover:text-pink-600 transition duration-200">Instagram</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
