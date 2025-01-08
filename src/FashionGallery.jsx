import React, { useState } from 'react';
import cpl2 from './assets/images/cpl2.jpg';
import gown2 from './assets/images/gown2.jpg';
import fml1 from './assets/images/fml1.jpeg';
import csl1 from './assets/images/csl1.jpg';
import lds2 from './assets/images/lds2.jpg';
import mns1 from './assets/images/mns1.jpg';
import lds3 from './assets/images/lds3.jpg';
import lds4 from './assets/images/lds4.jpg';
import lds5 from './assets/images/lds5.jpg';
import lds6 from './assets/images/lds6.jpg';
import lds7 from './assets/images/lds7.jpg';
import lds8 from './assets/images/lds8.jpg';
import lds9 from './assets/images/lds9.jpg';
import lds10 from './assets/images/lds10.jpg';
import mns2 from './assets/images/mns2.jpg';
import mns3 from './assets/images/mns3.jpg';
import mns4 from './assets/images/mns4.jpg';
import mns5 from './assets/images/mns5.jpg';
import mns6 from './assets/images/mns6.jpeg';
import mns7 from './assets/images/mns7.jpeg';
import mns8 from './assets/images/mns8.jpeg';
import mns9 from './assets/images/mns9.jpeg';
import mns10 from './assets/images/mns10.jpg';
import cpl1 from './assets/images/cpl1.jpg';
import cpl3 from './assets/images/cpl3.jpg';
import cpl4 from './assets/images/cpl4.jpeg';
import cpl5 from './assets/images/cpl5.jpeg';
import cpl6 from './assets/images/cpl6.jpeg';
import cpl7 from './assets/images/cpl7.jpeg';
import cpl8 from './assets/images/cpl8.jpeg';  
import cpl9 from './assets/images/cpl9.jpeg';
import cpl10 from './assets/images/cpl10.jpeg';
import cpl11 from './assets/images/cpl11.jpeg';
import cpl12 from './assets/images/cpl12.jpeg';
import cpl13 from './assets/images/cpl13.jpeg';
import cpl14 from './assets/images/cpl14.jpeg';
import cpl15 from './assets/images/cpl15.jpeg';
import gown1 from './assets/images/gown1.jpg';
import gown3 from './assets/images/gown3.jpg';
import gown4 from './assets/images/gown4.jpg';
import gown5 from './assets/images/gown5.jpg';
import gown6 from './assets/images/gown6.jpg';
import gown7 from './assets/images/gown7.jpg';
import gown8 from './assets/images/gown8.jpg';
import gown9 from './assets/images/gown9.jpg';
import gown10 from './assets/images/gown10.jpg';
import gown11 from './assets/images/gown11.jpg';
import gown12 from './assets/images/gown12.jpg';
import gown13 from './assets/images/gown13.jpg';
import gown14 from './assets/images/gown14.jpg';
import gown15 from './assets/images/gown15.jpg';
import cop1 from './assets/images/cop1.jpg';
import cop2 from './assets/images/cop2.jpg';
import cop3 from './assets/images/cop3.jpg';
import cop4 from './assets/images/cop4.jpg';
import cop5 from './assets/images/cop5.jpg';
import cop6 from './assets/images/cop6.jpg';
import cop7 from './assets/images/cop7.jpg';
import cop8 from './assets/images/cop8.jpg';
import cop9 from './assets/images/cop9.jpg';
import cop10 from './assets/images/cop10.jpg';
import cop11 from './assets/images/cop11.jpg';
import cop12 from './assets/images/cop12.jpg';
import cop13 from './assets/images/cop13.jpeg';
import cop14 from './assets/images/cop14.jpeg';
import cop15 from './assets/images/cop15.jpeg';
import csl2 from './assets/images/csl2.jpg';
import csl3 from './assets/images/csl3.jpg';
import csl4 from './assets/images/csl4.jpg';
import csl5 from './assets/images/csl5.jpg';
import csl6 from './assets/images/csl6.jpg';
import csl7 from './assets/images/csl7.jpg';
import csl8 from './assets/images/csl8.jpg';
import csl9 from './assets/images/csl9.jpg';
import csl10 from './assets/images/csl10.jpg';
import csl11 from './assets/images/csl11.jpeg';
import csl12 from './assets/images/csl12.jpeg';
import csl13 from './assets/images/csl13.jpeg';
import csl14 from './assets/images/csl14.jpeg';
import csl15 from './assets/images/csl15.jpeg';


const fashionItems = [
  {
    id: 1,
    imageUrl: cpl2,
    category: 'Traditional outfits',
    title: 'Couple Matching Outfits',
    images: [
      { id: 1, url: cpl1 },
      { id: 2, url: cpl3 },
      { id: 3, url: cpl4 },
      { id: 4, url: cpl5 },
      { id: 5, url: cpl6 },
      { id: 6, url: cpl7 },
      { id: 7, url: cpl8 },
      { id: 8, url: cpl9 },
      { id: 9, url: cpl10 },
      { id: 10, url: cpl11 },
      { id: 11, url: cpl12 },
      { id: 12, url: cpl13 },
      { id: 13, url: cpl14 },
      { id: 14, url: cpl15 },
      
    ],
  },
  {
    id: 1,
    imageUrl: gown2,
    category: 'Traditional outfits',
    title: 'Gowns and Dresses',
    images: [
      { id: 1, url: gown1 },
      { id: 2, url: gown2 },
      { id: 3, url: gown3 },
      { id: 4, url: gown4 },
      { id: 5, url: gown5 },
      { id: 6, url: gown6 },
      { id: 7, url: gown7 },
      { id: 8, url: gown8 },
      { id: 9, url: gown9 },
      { id: 10, url: gown10 },
      { id: 11, url: gown11 },
      { id: 12, url: gown12 },
      { id: 13, url: gown13 },
      { id: 14, url: gown14 },
      { id: 15, url: gown15 },
    ],
  },
  {
    id: 1,
    imageUrl: fml1,
    category: 'Traditional outfits',
    title: 'Corperate Outfits',
    images: [
      { id: 1, url: cop1},
      { id: 2, url: cop2},
      { id: 3, url: cop3},
      { id: 4, url: cop4},
      { id: 5, url: cop5},
      { id: 6, url: cop6},
      { id: 7, url: cop7},
      { id: 8, url: cop8},
      { id: 9, url: cop9},
      { id: 10, url: cop10},
      { id: 11, url: cop11},
      { id: 12, url: cop12},
      { id: 13, url: cop13},
      { id: 14, url: cop14},
      { id: 15, url: cop15},
    ],
  },
  {
    id: 1,
    imageUrl: csl1,
    category: 'Traditional outfits',
    title: 'Casual Outfits',
    images: [
      { id: 1, url: csl1 },
      { id: 2, url: csl2 },
      { id: 3, url: csl3 },
      { id: 4, url: csl4 },
      { id: 5, url: csl5 },
      { id: 6, url: csl6 },
      { id: 7, url: csl7 },
      { id: 8, url: csl8 },
      { id: 9, url: csl9 },
      { id: 10, url: csl10 },
      { id: 11, url: csl11 },
      { id: 12, url: csl12 },
      { id: 13, url: csl13 },
      { id: 14, url: csl14 },
      { id: 15, url: csl15 },
    ],
  },
  {
    id: 1,
    imageUrl: mns1,
    category: 'Traditional outfits',
    title: 'Mens Outfit',
    images: [
      { id: 1, url: mns2 },
      { id: 2, url: mns3 },
      { id: 3, url: mns4 },
      { id: 4, url: mns5 },
      { id: 5, url: mns6 },
      { id: 6, url: mns7 },
      { id: 7, url: mns8 },
      { id: 8, url: mns9 },
      { id: 9, url: mns10 },
    ],
  },
  {
    id: 1,
    imageUrl: lds2,
    category: 'Traditional outfits',
    title: 'Ladies Outfit',
    images: [
      { id: 1, url: lds3 },
      { id: 2, url: lds4 },
      { id: 3, url: lds5 },
      { id: 4, url: lds6 },
      { id: 5, url: lds7 },
      { id: 6, url: lds8 },
      { id: 7, url: lds9 },
      { id: 8, url: lds10 },
    ],
  },
  // ...
];

function FashionGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section id="gallery">
      {selectedItem ? (
        <div className="text-center">
          <button
            onClick={() => setSelectedItem(null)}
            className="bg-green-900 text-white py-2 px-4 rounded mb-4 hover:bg-yellow-200 transition duration-200"
          >
            Back to Gallery
          </button>
          <div className="flex justify-center">
            <img
              src={selectedImage || selectedItem.imageUrl}
              alt={selectedItem.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-3xl font-semibold mt-4">
            {selectedItem.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedItem.images.map((image) => (
              <div
                key={(cpl2)}
                className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
              >
                <img
                  src={image.url}
                  alt={selectedItem.title}
                  className="w-full rounded-lg"
                  onClick={() => handleImageClick(image.url)}
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => setSelectedItem(null)}
            className="bg-green-900 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-200 transition duration-200"
          >
            Back to Gallery
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fashionItems.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full rounded-lg"
                onClick={() => setSelectedItem(item)}
              />
              <h3 className="text-xl font-semibold mt-2">
                {item.title}
              </h3>
              <button
                onClick={() => setSelectedItem(item)}
                className="bg-green-950 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-300 transition duration-200"
              >
                View Styles
              </button>
            </div>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <img
            src={selectedImage}
            alt="Selected Image"
            className="max-w-md max-h-md rounded-lg shadow-lg"
          />
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}

export default FashionGallery;
