import { useContext, useState } from "react"
import CameraCapture from "../../components/CameraCapture/CameraCapture"
import ImageUploader from "../../components/ImagemUpload/ImagemUserUpload"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { ContainerUploadOpcoes, FotoFrame, FotoFrameUpada, StyledOpcoesImage, StyledUserUploadImgPage, UserUploadContainer } from "./styledUserUploadImg"
import ok from "../../assets/check.svg"
import box_delete from "../../assets/delete.svg"
import next from "../../assets/folder-check.svg"
import voltar from "../../assets/return-2.svg"
import { NextAndBackImg } from "../Signup User/styledSigUpUser"
import ombro from "../../assets/Caminho 4.png"
import face from "../../assets/Elipse 1.png"
import ImageCropperModal from "../../components/Modal/ImageCropperModal"
import { UserContext } from "../../contexts/UserContext"




export const UserUploadImg = () => {
    const context = useContext(UserContext)
    const {capturedImage, setCapturedImage, uploadedImage, setUploadedImage, isImageCropperOpen, setImageCropperOpen, imagemUpada, setImagemUpada} = context

    // const [capturedImage, setCapturedImage] = useState(null);
    // const [uploadedImage, setUploadedImage] = useState(null);
    // const [isImageCropperOpen, setImageCropperOpen] = useState(false);
    // const [imagemUpada, setImagemUpada] = useState(false)


    const handlePhotoCapture = (imageData) => {
        setCapturedImage(imageData);
        setImagemUpada(false)
        //   `url(data:image/jpeg;base64,${btoa(
        //      String.fromCharCode(...imagemData)
        //    )})`
    };

    const handleImageUpload = (imageData) => {
        // console.log("aqui foi");
        // console.log(imageData);
        setUploadedImage(imageData);
        setImagemUpada(true)
        // console.log(uploadedImage);
    };

    const cancelImagem = () => {
        setUploadedImage(null);
        setCapturedImage(null);
        setImagemUpada(false)
    };

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
                 {imagemUpada? <FotoFrameUpada backgroundImage={uploadedImage} >
                    <img src={face} alt="Face" />
                    <img src={ombro} alt="Ombro" />
                 </FotoFrameUpada> :<FotoFrame onClick={() => setImageCropperOpen(true)} backgroundImage={capturedImage} >
                    <img src={face} alt="Face" />
                    <img src={ombro} alt="Ombro" />
                </FotoFrame>}
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
                {/* <img src={capturedImage || uploadedImage}/> */}
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