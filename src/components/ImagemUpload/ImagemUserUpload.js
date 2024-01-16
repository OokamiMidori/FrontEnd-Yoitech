import React, { useEffect, useRef, useState } from 'react';
import { CameraButton } from '../CameraCapture/CameraCaptureStyled';

function ImageUploader({ onImageUpload }) {
  const fileInputRef = useRef(null);



  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      onImageUpload(URL.createObjectURL(e.target.files[0]))
    };
  };

  // const handleImageChange = (e) => {
  //   // const file = e.target.files[0];

  //   if (e.target.files[0]) {
  //     console.log("picture: ", e.target.files);

  //     const reader = new FileReader();
  //     reader.addEventListener("load", () => {
  //       setImgData(reader.result);
  //     });
  //     reader.readAsDataURL(e.target.files[0]);
  //     console.log("funciona");

  //     console.log(imgData);

  //     onImageUpload(imgData);
  //   }
  //   // console.log("picture: ", picture);
  //   // setPicture(URL.createObjectURL(e.target.files[0]));
  //   // console.log("picture: ", picture);

  // };


  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <CameraButton onClick={handleUploadClick}>Carregar Imagem</CameraButton>
    </div>
  );
}

export default ImageUploader;
