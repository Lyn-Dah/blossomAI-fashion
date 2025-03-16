import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: "ai-fashion",
    title: "AI, the Future of Fashion",
    description: "Explore how artificial intelligence is transforming the fashion industry and reshaping trends.",
    content: "This is the full content of AI and Fashion...",
  },
  {
    id: "ai-personalization",
    title: "Elevating Your Fashion Sense with AI",
    description: "Learn how AI-driven recommendations can help you craft a stunning and personalized wardrobe.",
    content: "This is the full content of AI in personal styling...",
  },
  {
    id: "choosing-style",
    title: "Choosing the Perfect Fashion Style",
    description: "Find out how to select the ideal fashion style that suits your personality and lifestyle.",
    content: "This is the full content of Choosing the Right Style...",
  },
];

function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-r from-green-50 to-white text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-green-950"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fashion Tips & Blog
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-green-950 opacity-5 group-hover:opacity-20 transition-all duration-300 rounded-2xl blur-xl"></div>

              <h3 className="text-2xl font-bold mb-3 text-green-950 group-hover:text-yellow-500 transition duration-300">
                {post.title}
              </h3>
              <p className="text-gray-700">{post.description}</p>

              {/* ✅ "Read More" now links to the blog post */}
              <Link to={`/blog/${post.id}`}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-950 text-white py-3 px-6 rounded-lg mt-6 font-semibold hover:bg-yellow-500 transition duration-300"
                >
                  Read More
                </motion.button>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
