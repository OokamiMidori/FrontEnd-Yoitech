// Em CameraCapture.js
import React, { useRef, useState } from 'react';

function CameraCapture({ onPhotoCapture }) {
  const videoRef = useRef(null);
  const mediaStream = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleToggleCamera = () => {
    if (isCameraOpen) {
      handleCloseCamera();
    } else {
      handleOpenCamera();
    }
  };

  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      mediaStream.current = stream;
      videoRef.current.srcObject = stream;
      setIsCameraOpen(true);
    } catch (error) {
      console.error('Erro ao abrir a câmera:', error);
    }
  };

  const handleCloseCamera = () => {
    if (mediaStream.current) {
      const tracks = mediaStream.current.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraOpen(false);
    }
  };

  const handleTakePhoto = () => {
    if (mediaStream.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
      const dataURL = canvas.toDataURL('image/jpeg');

      // Convertendo a imagem em bytes (BLOB)
      const byteCharacters = atob(dataURL.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);

      // Chama a função de retorno de chamada para enviar a foto ao componente pai.
      onPhotoCapture(byteArray);

      // Fecha a câmera automaticamente após a captura da foto.
      handleCloseCamera();
    }
  };

  return (
    <div>
      <button onClick={handleToggleCamera}>
        {isCameraOpen ? 'Fechar Câmera' : 'Abrir Câmera'}
      </button>
      {isCameraOpen && (
        <>
          <button onClick={handleTakePhoto}>Tirar Foto</button>
        </>
      )}
      <video ref={videoRef} autoPlay muted />
    </div>
  );
}

export default CameraCapture;
