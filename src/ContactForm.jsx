import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import contactImage from "./assets/images/contactus.jpg"; // Import the image

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-purple-50 to-indigo-50 min-h-screen flex items-center justify-center px-4 sm:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row max-w-6xl w-full"
      >
        {/* Left Section - Image with Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6"
        >
          <img
            src={contactImage}
            alt="Contact"
            className="rounded-2xl w-full h-auto object-cover shadow-lg"
          />
        </motion.div>

        {/* Right Section - Form with Fade-in Effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full md:w-1/2 p-4 sm:p-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center md:text-left">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">E-mail</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-950"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-950 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
            >
              Send Message
            </motion.button>
            {sent && <p className="text-green-600 font-semibold mt-4 text-center">Message sent successfully!</p>}
          </form>
          
          {/* Contact Info */}
          <div className="mt-6 sm:mt-8 text-gray-700 text-center md:text-left">
            <p className="font-semibold text-lg">Contact</p>
            <p className="text-gray-600">blossomfashion@gmail.com</p>
            <p className="text-gray-600">Accra, Ghana</p>
          </div>

          {/* Social Media Icons with Hover Effects */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6 sm:mt-8 text-gray-700">
            <FaFacebookF className="text-2xl cursor-pointer hover:text-indigo-600 transition duration-300" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-800 transition duration-300" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-black transition duration-300" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactForm;
