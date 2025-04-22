import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-950 to-current text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold tracking-wide">Blossom AI Fashion</h3>
          <p className="text-gray-300 mt-2">&copy; 2025 Blossom AI Fashion. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-2">
            {["Home", "Gallery", "Blog", "Contact"].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                className="text-gray-300 hover:text-white transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h4 className="text-xl font-semibold text-black mb-4">Get in Touch</h4>
          <p className="text-black">
            Email: 
            <a href="mailto:info@blossomai.com" className="text-green-950 hover:underline ml-1">
            blossomfashion@gmail.com
            </a>
          </p>
          <p className="text-black mt-2">
            Phone: 
            <a href="tel:+233123456789" className="text-green-950 hover:underline ml-1">
              +233 123 456 789
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {[ 
              { icon: FaFacebookF, link: "https://web.facebook.com/share/g/16D9mJWwFi/", color: "hover:text-blue-500" },
              { icon: FaTwitter, link: "https://twitter.com", color: "hover:text-black" },
              { icon: FaInstagram, link: "https://instagram.com", color: "hover:text-pink-500" },
              { icon: FaLinkedin, link: "https://linkedin.com", color: "hover:text-black" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-black ${social.color} transition-all duration-300 text-2xl`}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
