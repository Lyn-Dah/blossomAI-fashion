import React from 'react';

function Blog() {
  return (
    <section id="blog" className="py-12 bg-gray-100">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Fashion Tips & Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">AI, the future of fashion</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-green-950 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-300 transition duration-200">Read More</button>
          </article>
          <article className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Elevating your fashion sense with AI</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-green-950 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-300 transition duration-200">Read More</button>
          </article>
          <article className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Choosing the perfect fashion style</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-green-950 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-300 transition duration-200">Read More</button>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Blog;