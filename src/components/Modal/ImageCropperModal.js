import React from 'react';
import Modal from 'react-modal';
import ImageCropper from '../ImageCropper/ImageCropper';

// Defina o "App element" aqui
Modal.setAppElement('#root'); // Substitua '#root' pelo seletor do seu elemento raiz

function ImageCropperModal({ backgroundImage, onImageCrop, onClose }) {
  const handleImageCrop = (croppedImage) => {
    onImageCrop(croppedImage);
    onClose(); // Fecha o modal após a conclusão do corte
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose}> {/* Abra o modal */}
      <ImageCropper backgroundImage={backgroundImage} onImageCrop={handleImageCrop} />
    </Modal>
  );
}

export default ImageCropperModal;
