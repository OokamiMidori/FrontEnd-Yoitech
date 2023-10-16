import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { StyledUserUploadImgPage, UserUploadContainer } from "./styledUserUploadImg"

export const UserUploadImg = () =>{
    return (
        <StyledUserUploadImgPage>
        <Header/>
        <UserUploadContainer>
            <input type="image"/>
        </UserUploadContainer>
        <Footer/>
        </StyledUserUploadImgPage>
    )
}