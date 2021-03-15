import React from 'react';

import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({  id, largeImageURL, onClick, image }) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
        onClick={onClick}
        data-source={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
