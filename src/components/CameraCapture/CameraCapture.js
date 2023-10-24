import React, { useRef, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { CameraButton } from './CameraCaptureStyled';

function CameraCapture({ onPhotoCapture }) {
  const videoRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [modalSize, setModalSize] = useState({ width: 'auto', height: 'auto' });

  const handleToggleCamera = () => {
    if (isCameraOpen) {
      handleCloseCamera();
    } else {
      handleOpenCamera();
    }
  };

  const handleOpenCamera = () => {
    setIsCameraOpen(true);
  };

  const handleCloseCamera = () => {
    setIsCameraOpen(false);
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
    }
  };

  const handleTakePhoto = () => {
    if (mediaStream) {
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

  useEffect(() => {
    if (isCameraOpen) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          setMediaStream(stream);
        })
        .catch((error) => {
          console.error('Erro ao abrir a câmera:', error);
        });
    }
  }, [isCameraOpen]);

  useEffect(() => {
    if (mediaStream && isCameraOpen) {
      const videoTrack = mediaStream.getVideoTracks()[0];
      if (videoTrack) {
        const { width, height } = videoTrack.getSettings();
        setModalSize({ width: `${width}px`, height: `${height}px` });
      }
    }
  }, [isCameraOpen, mediaStream]);

  return (
    <div>
      <CameraButton onClick={handleToggleCamera}>
        {isCameraOpen ? 'Fechar Câmera' : 'Abrir Câmera'}
      </CameraButton>

      <Modal
        isOpen={isCameraOpen}
        onRequestClose={handleCloseCamera}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: modalSize.width,
            height: modalSize.height,
            padding: 0,
          }
        }}
      >
        {isCameraOpen && (
          <div>
            <video ref={videoRef} autoPlay playsInline muted />
            <button onClick={handleTakePhoto}>Tirar Foto</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CameraCapture;