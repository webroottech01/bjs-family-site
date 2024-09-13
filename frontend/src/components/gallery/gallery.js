import React, { useState } from "react";
import PropTypes from "prop-types";
import "./gallery.scss";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery">
      <div className="image-gallery">
        <div className="row">
          <div className="col left-column">
            <div className="gallery-out">
              <div className="gallery-item">
                <img
                  src={process.env.PUBLIC_URL + images.leftColumn[0]}
                  alt="image 0"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + images.leftColumn[0])}
                />
                <img
                  src={process.env.PUBLIC_URL + images.leftColumn[1]}
                  alt="image 1"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + images.leftColumn[1])}
                />
              </div>
              <div className="gallery-item">
                <img
                  src={process.env.PUBLIC_URL + images.leftColumn[2]}
                  alt="image 2"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + images.leftColumn[2])}
                />
              </div>
            </div>
          </div>
          <div className="col right-column">
            <div className="gallery-out">
              <div className="gallery-item">
                <img
                  src={process.env.PUBLIC_URL + images.rightColumn[0]}
                  alt="image 0"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + images.rightColumn[0])}
                />
                <img
                  src={process.env.PUBLIC_URL + images.rightColumn[1]}
                  alt="image 1"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + images.rightColumn[1])}
                />
              </div>
              <div className="gallery-item">
                <img
                  src={process.env.PUBLIC_URL + images.rightColumn[2]}
                  alt="image 2"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + images.rightColumn[2])}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>X</span>
            <img className="modal-content" src={selectedImage} alt="selected" />
          </div>
        </div>
      )}
    </section>
  );
};

Gallery.propTypes = {
  images: PropTypes.shape({
    leftColumn: PropTypes.arrayOf(PropTypes.string).isRequired,
    rightColumn: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Gallery;
