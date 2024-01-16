import { useState } from "react";
import { ContainerUploadOpcoes, FotoFrame, StyledOpcoesImage, StyledUserUploadImgPage, UserUploadContainer } from "../Upload Imagem User/styledUserUploadImg";
import { Header } from "../../components/header";
import ImageUploader from "../../components/ImagemUpload/ImagemUserUpload";
import ImageCropperModal from "../../components/Modal/ImageCropperModal";
import { Footer } from "../../components/footer";
import ok from "../../assets/check.svg"
import box_delete from "../../assets/delete.svg"
import next from "../../assets/next-3.svg"
import CameraCapture from "../../components/CameraCapture/CameraCapture";
import upload from "../../assets/download-tray.svg"
import { ImgFrame, ImgUpadaContainer, UserUploadCompanyContainer, } from "./UploadImgCompanyStyled";
import { NextAndBackImg } from "../Signup User/styledSigUpUser";
import back from "../../assets/return-2.svg"

export const ImgCompanyPage = () =>{
    
        const [capturedImage, setCapturedImage] = useState(null);
        const [uploadedImage, setUploadedImage] = useState(null);
        const [isImageCropperOpen, setImageCropperOpen] = useState(false);
        const [imagemUpada, setImagemUpada] = useState(false)
    
    
        const handlePhotoCapture = (imageData) => {
            setCapturedImage(imageData);
            setImagemUpada(false)
        };
    
        const handleImageUpload = (imageData) => {
            setUploadedImage(imageData);
            setImagemUpada(true)
        };
    
        const cancelImagem = () => {
            setUploadedImage(null);
            setCapturedImage(null);
            setImagemUpada(false)
        }
    return(
<StyledUserUploadImgPage>
            <Header />
            <UserUploadCompanyContainer>
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
               {imagemUpada? <ImgUpadaContainer backgroundImage={uploadedImage}>
                    
               </ImgUpadaContainer> : <ImgFrame onClick={() => setImageCropperOpen(true)} backgroundImage={capturedImage} >
                   <img src={upload}/>
                </ImgFrame>}
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
                    <img src={back} alt="back_img.svg"/>                   
                    <img src={next} alt="Next_Image" />
                </NextAndBackImg>
            </UserUploadCompanyContainer>
            <Footer />
        </StyledUserUploadImgPage>
    )
}