import { useState } from "react"
import CameraCapture from "../../components/CameraCapture/CameraCapture"
import ImageUploader from "../../components/ImagemUpload/ImagemUserUpload"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { ContainerUploadOpcoes, FotoFrame, StyledOpcoesImage, StyledUserUploadImgPage, UserUploadContainer } from "./styledUserUploadImg"
import ok from "../../assets/check.svg"
import box_delete from "../../assets/delete.svg"
import next from "../../assets/folder-check.svg"
import voltar from "../../assets/return-2.svg"
import { NextAndBackImg } from "../Signup User/styledSigUpUser"
import ombro from "../../assets/Caminho 4.png"
import face from "../../assets/Elipse 1.png"
import ImageCropperModal from "../../components/Modal/ImageCropperModal"




export const UserUploadImg = () => {
    const [capturedImage, setCapturedImage] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isImageCropperOpen, setImageCropperOpen] = useState(false);


    const handlePhotoCapture = (imageData) => {
        setCapturedImage(imageData);
    };

    const handleImageUpload = (imageData) => {
        setUploadedImage(imageData);
    };

    const cancelImagem = () => {
        setUploadedImage(null);
        setCapturedImage(null);
    }

    return (
        <StyledUserUploadImgPage>
            <Header />
            <UserUploadContainer>
                <div className="titulo">Cadastro</div>
                <div>
                    <div>Inserir foto de rosto</div>
                    <ContainerUploadOpcoes>
                        <div className="div">Selecionar arquivo no meu computador</div>
                        <ImageUploader onImageUpload={handleImageUpload} />
                    </ContainerUploadOpcoes>

                </div>
                <div>
                    <div>Tirar uma foto com o celular</div>
                    <ContainerUploadOpcoes>
                        <div className="div">Câmera do celular ou WebCam</div>
                        <CameraCapture onPhotoCapture={handlePhotoCapture} />
                    </ContainerUploadOpcoes>
                </div>
                <FotoFrame onClick={() => setImageCropperOpen(true)} backgroundImage={capturedImage || uploadedImage} >
                    <img src={face} alt="Face" />
                    <img src={ombro} alt="Ombro" />
                </FotoFrame>
                {isImageCropperOpen && (
                    <ImageCropperModal
                        backgroundImage={capturedImage || uploadedImage}
                        onImageCrop={(croppedImage) => {
                            setUploadedImage(croppedImage);
                            setImageCropperOpen(false); // Fecha o modal do ImageCropper após a conclusão
                        }}
                        onClose={() => setImageCropperOpen(false)} // Lida com o fechamento do modal
                    />
                )}
                <div>Ajustar a foto conforme o modelo</div>
                <div>
                    <div>Confirmar a foto</div>
                    <StyledOpcoesImage>
                        <img src={ok} />
                        <img src={box_delete} onClick={() => cancelImagem()} />
                    </StyledOpcoesImage>
                </div>
                <NextAndBackImg>
                    <img src={voltar} alt="Return_Image" />
                    <img src={next} alt="Next_Image" />
                </NextAndBackImg>
            </UserUploadContainer>
            <Footer />
        </StyledUserUploadImgPage>
    )
}