import { useState } from "react"
import CameraCapture from "../../components/CameraCapture/CameraCapture"
import ImageUploader from "../../components/ImagemUpload/ImagemUserUpload"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { FaceFrame, FotoFrame, StyledUserUploadImgPage, UserUploadContainer } from "./styledUserUploadImg"


export const UserUploadImg = () => {
    const [capturedImage, setCapturedImage] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handlePhotoCapture = (imageData) => {
        setCapturedImage(imageData);
    };

    const handleImageUpload = (imageData) => {
        setUploadedImage(imageData);
    };



    return (
        <StyledUserUploadImgPage>
            <Header />
            <UserUploadContainer>
                <div>Cadastro</div>
                <div>
                    <div>Inserir foto de rosto</div>
                    <ImageUploader onImageUpload={handleImageUpload} />
                </div>
                <div>
                    <div>Tirar uma foto com o celular</div>
                    <CameraCapture onPhotoCapture={handlePhotoCapture} />
                </div>
                <FotoFrame backgroundImage={capturedImage || uploadedImage} >
                    <FaceFrame  >

                    </FaceFrame>
                </FotoFrame>

            </UserUploadContainer>
            <Footer />
        </StyledUserUploadImgPage>
    )
}