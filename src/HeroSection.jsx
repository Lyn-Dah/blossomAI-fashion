import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hero2 from './assets/images/hero2.jpg';
import hero1 from './assets/images/hero1.jpg';
import hero3 from './assets/images/hero3.jpg';
import hero4 from './assets/images/hero4.jpg';
import hero5 from './assets/images/hero5.jpg';
import hero6 from './assets/images/hero6.jpg';
import hero7 from './assets/images/hero7.jpg';
import hero8 from './assets/images/hero8.jpg';
import hero9 from './assets/images/hero9.jpg';
import hero10 from './assets/images/hero10.jpg';

const images = [
  { image: hero1, alt: 'Fashion Style 1' },
  { image: hero2, alt: 'Fashion Style 2' },
  { image: hero3, alt: 'Fashion Style 3' },
  { image: hero4, alt: 'Fashion Style 4' },
  { image: hero5, alt: 'Fashion Style 4' },
  { image: hero6, alt: 'Fashion Style 4' },
  { image: hero7, alt: 'Fashion Style 4' },
  { image: hero8, alt: 'Fashion Style 4' }, 
  { image: hero9, alt: 'Fashion Style 4' },
  { image: hero10, alt: 'Fashion Style 4' },
];

function HeroSection() {
  return (
    <section id="home" className="LandingPage relative ">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="w-full"
      >
        {images.map((image, index) => (
          <div key={index} className=" flex justify-center items-center">
            <img
              src={image.image}
              alt={image.alt}
              className="w-full  object-fit' md:object-contain"
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-transparent bg-opacity-50">
        <h1 className="text-6xl md:text-8xl text-white font-bold text-center">
          Welcome to Blossom AI Fashion Trendz
        </h1>
        <p className="text-2xl md:text-3xl text-green-950 font-semibold text-center mt-4">
          Discover the latest AI Generated fashion styles and trends
        </p>
        <a
          href="#gallery"
          className="bg-green-950 text-white py-2 px-4 rounded mt-6 hover:bg-green-900 transition duration-200"
        >
          View Gallery
        </a>
      </div>
    </section>
  );
}

export default HeroSection;

