'use client'
import React, { useState } from 'react';

const carouselImagesData = [
  { id: 1, title: 'Image 1', image: 'image1.jpg' },
  { id: 2, title: 'Image 2', image: 'image2.jpg' },
  // Add more carousel images as needed
];

const AdminPanel = () => {
  const [carouselImages, setCarouselImages] = useState(carouselImagesData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newImageTitle, setNewImageTitle] = useState('');
  const [newImageFile, setNewImageFile] = useState('');

  const handleAddImage = () => {
    // Assuming you have a function to add a new image to the carousel
    // For example:
    // setCarouselImages([...carouselImages, { id: carouselImages.length + 1, title: newImageTitle, image: newImageFile }]);
    // Close the modal
    setIsModalOpen(false);
    // Clear the input fields
    setNewImageTitle('');
    setNewImageFile('');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Carousel Image Management</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Add Image
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white border rounded-lg overflow-hidden">
          <thead className="text-blue-400">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {carouselImages.map(image => (
              <tr key={image.id} className='hover:bg-white hover:text-black'>
                <td className="py-3 px-4">{image.id}</td>
                <td className="py-3 px-4">{image.title}</td>
                <td className="py-3 px-4">{image.image}</td>
                <td className="py-3 px-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded mr-2">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white w-64 p-6 rounded shadow-lg z-50">
            <h2 className="text-2xl font-bold mb-4">Add Image</h2>
            <input
              type="text"
              placeholder="Enter image title"
              className="border border-gray-300 rounded px-2 py-1 mb-4 w-full"
              value={newImageTitle}
              onChange={e => setNewImageTitle(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              className="border border-gray-300 rounded px-2 py-1 mb-4 w-full"
              onChange={e => setNewImageFile(e.target.files[0])}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
              onClick={handleAddImage}
            >
              Add Image
            </button>
            <button
              className="text-sm text-gray-600 mt-2 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
