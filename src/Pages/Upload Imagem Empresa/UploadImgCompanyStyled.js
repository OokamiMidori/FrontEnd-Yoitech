import styled from "styled-components";

export const ImgFrame = styled.div`
  width: 201px;
  height: 213px;
  border-color: #484B4D;
  border-width: 14px;
  border-style: solid;
  border-radius: 5px;
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
  width: 80px;
  height:80px;
  }

`

export const ImgUpadaContainer = styled.div`
  width: 201px;
  height: 213px;
  border-color: #484B4D;
  border-width: 14px;
  border-style: solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: relative;
  background-image: ${(props) =>
    props.backgroundImage
      ? `url(${props.backgroundImage
        })`
      : 'none'};;
  background-size: cover;
  background-position: center;

  img{
    background: none;
  width: 80px;
  height:80px;
  }
`

export const UserUploadCompanyContainer = styled.div`
height: 820px;
width: 703px;
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

