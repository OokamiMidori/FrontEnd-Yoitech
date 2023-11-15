import styled from "styled-components";

export const StyledUserUploadImgPage = styled.div`
display: flex;
flex-direction: column;
height: 1000px;

align-items: center;
justify-content: space-between;
/* video{
  background-color: white;
} */
`

export const UserUploadContainer = styled.div`
height: 855px;
width: 820px;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
padding: 0px 15px;
margin-bottom: 15px;
img{
  cursor: pointer;
}
div{
  background-color: white;
}
.titulo{
  color: #707070;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  text-align: center;
  line-height: 30px;
  padding-left: 20px;
}
`
export const FotoFrame = styled.div`
  width: 185.7px;
  height: 195.3px;
  border-color: rgba(72, 75, 77, 0.47);
  border-width: 14.285710334777832px;
  border-style: solid;
  border-radius: 14.285710334777832px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: relative;
  background-image: ${(props) =>
    props.backgroundImage
      ? `url(data:image/jpeg;base64,${btoa(
          String.fromCharCode(...props.backgroundImage)
        )})`
      : 'none'};
  background-size: cover;
  background-position: center;

  img{
    background: none;
  max-height:80%
  
  }

`;



export const StyledOpcoesImage = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: white;
img{
  background-color: #A9AEB3;
  border: 1px solid #707070;
  cursor: pointer;
}
`

export const ContainerUploadOpcoes = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
.div{
  width: 370px;
  height: 50px;
  border-radius: 4px;
  background-color: #dddddd;
  color: #A8A8A8;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 15px;
}
`