import React from 'react';

function ImageUploader({ onImageUpload }) {


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {

                const imageData = e.target.result;
                // setSelectedImage(imageData);

                // Chame a função de callback para passar os dados da imagem para o componente pai
                onImageUpload(imageData);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
        </div>
    );
}

export default ImageUploader;
