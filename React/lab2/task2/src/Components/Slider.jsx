import React, { useState } from "react";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 5;
  const imgSrc = `/${currentImage}.jpg`;

  const nextImage = () => {
    setCurrentImage(currentImage === totalImages ? 1 : currentImage + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 1 ? totalImages : currentImage - 1);
  };

  return (
    <div>
      <button onClick={previousImage}>Previous</button>
      <img
        src={imgSrc}
        alt={`Image ${currentImage}`}
        width={150}
        height={150}
      />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Slider;
