//CSS
import "react-image-gallery/styles/css/image-gallery.css";
import "./GalleryComponent.css"

//MODULES AND COMPONENTS
import React from 'react';
import ImageGallery from "react-image-gallery";


//IMAGES
import me_and_her_4 from '../../images/me_and_her_4.jpg'
import me_and_her_5 from '../../images/me_and_her_5.png'
import me_and_her_6 from '../../images/me_and_her_6.jpg'
import me_and_her_7 from '../../images/me_and_her_7.jpg'


const images = [
    {
        original: me_and_her_4,
        originalHeight: "300px",
        originalWidth: "300px",
        thumbnail: me_and_her_4,
        thumbnailHeight: "100px",
        thumbnailWidth: "100px",
    },
    {
      original: me_and_her_5,
      originalHeight: "300px",
      originalWidth: "300px",
      thumbnail: me_and_her_5,
      thumbnailHeight: "100px",
      thumbnailWidth: "100px",
    },
    {
        original: me_and_her_6,
        originalHeight: "300px",
        originalWidth: "300px",
        thumbnail: me_and_her_6,
        thumbnailHeight: "100px",
        thumbnailWidth: "100px",
      },
      {
        original: me_and_her_7,
        originalHeight: "300px",
        originalWidth: "300px",
        thumbnail: me_and_her_7,
        thumbnailHeight: "100px",
        thumbnailWidth: "100px",
      },
  ];

function GalleryComponent() {
  return (
    <div className="Gallery-Component">
        <ImageGallery items={images} />
    </div>
  );
}

export default GalleryComponent;
