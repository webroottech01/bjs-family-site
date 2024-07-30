import React from "react";
import Gallery from "../../../components/gallery/gallery";

const imagesForPage1 = {
  leftColumn: [
    "/images/image41.jpg",
    "/images/image42.jpg",
    "/images/image43.jpg"
  ],
  rightColumn: [
    "/images/image44.jpg",
    "/images/image45.jpg",
    "/images/image46.jpg"
  ]
};

const GalleryPage1 = () => {
  return (
    <div>
      {/* <h1>Page 1 Gallery</h1> */}
      <Gallery images={imagesForPage1} />
    </div>
  );
};

export default GalleryPage1;
