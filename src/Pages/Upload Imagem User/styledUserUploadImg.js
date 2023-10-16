import styled from "styled-components";

export const StyledUserUploadImgPage = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const UserUploadContainer = styled.div`
height: 855px;
width: 820px;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
`
export const FotoFrame = styled.div`
  width: 185.7px;
  height: 195.3px;
  border-color: rgba(72, 75, 77, 0.47);
  border-width: 14.285710334777832px;
  border-style: solid;
  border-radius: 14.285710334777832px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: ${(props) =>
    props.backgroundImage
      ? `url(data:image/jpeg;base64,${btoa(
          String.fromCharCode(...props.backgroundImage)
        )})`
      : 'none'};
  background-size: cover;
  background-position: center;
`;

export const FaceFrame = styled.div`
  width: 89.4px;
  height: 128.4px;
  border-radius: 100px;
  position: absolute;
  border-color: rgba(72, 75, 77, 0.47);
  border-width: 14.285710334777832px;
  border-style: solid;
  opacity: 1.00;
  background: transparent;
`;