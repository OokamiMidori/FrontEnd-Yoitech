import React, { useRef } from 'react';
import { CameraButton } from '../CameraCapture/CameraCaptureStyled';

function ImageUploader({ onImageUpload }) {
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        onImageUpload(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Simule o clique no input file
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef} // Associe o ref ao input
        style={{ display: 'none' }} // Oculte o input
      />
      <CameraButton onClick={handleUploadClick}>Carregar Imagem</CameraButton>
    </div>
  );
}

export default ImageUploader;
