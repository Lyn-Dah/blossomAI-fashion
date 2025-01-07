import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto p-4 flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
          <h2
            className="text-2xl font-bold mb-4 animate-slide-in-from-left"
            data-animate-delay="0.2s"
          >
            Get in touch for customized fashion styles
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg animate-fade-in"
            data-animate-delay="0.5s"
          >
            <div className="mb-4 animate-slide-in-from-bottom" data-animate-delay="0.7s">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4 animate-slide-in-from-bottom" data-animate-delay="0.9s">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 animate-slide-in-from-bottom" data-animate-delay="1.1s">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-green-950 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-bounce-in"
              data-animate-delay="1.3s"
            >
              Send Message
            </button>
            {sent && (
              <p
                className="text-green-500 font-bold mt-4 animate-fade-in"
                data-animate-delay="1.5s"
              >
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
        {/* <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
          <img
            src="./assets/images/hero10.jpg"
            alt="Contact Image"
            className="w-full h-full object-cover object-center rounded-lg shadow-lg animate-slide-in-from-right"
            data-animate-delay="0.5s"
          />
        </div> */}
      </div>
    </section>
  );
}

export default ContactForm;
