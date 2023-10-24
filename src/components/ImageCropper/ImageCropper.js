import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function ImageCropper({ backgroundImage, onImageCrop }) {
  const [crop, setCrop] = useState({ aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const imgRef = useRef(null);

  const onImageLoaded = (image) => {
    imgRef.current = image;
  };

  const handleImageCrop = () => {
    if (imgRef.current && completedCrop) {
      const canvas = document.createElement('canvas');
      const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
      const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
      canvas.width = completedCrop.width;
      canvas.height = completedCrop.height;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(
        imgRef.current,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        completedCrop.width,
        completedCrop.height
      );

      canvas.toBlob((blob) => {
        onImageCrop(blob);
      });
    }
  };

  return (
    <div>
      <ReactCrop
        src={backgroundImage}
        onImageLoaded={onImageLoaded}
        crop={crop}
        onChange={(newCrop) => setCrop(newCrop)}
        onComplete={(newCrop) => setCompletedCrop(newCrop)}
      />
      <button onClick={handleImageCrop}>Concluir</button>
    </div>
  );
}

export default ImageCropper;
