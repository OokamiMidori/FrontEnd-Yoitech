import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  .numeros{
    display: flex;
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transform: rotate(30deg);
`;

const NumberOverlay = styled.div`
  position: absolute;
  top: 10px;
  right: 25px;
  height: 1%;
  width: 5%;
  color: #000;
  padding: 0px 0px;
  margin: 5px 9px 0px 0px;
  /* border-radius: 50%; */
  
`;

const ImageWithNumber = ({ src, number, funcao, formNumber }) => {
    const handleFuncaoClick = () => {
        funcao(formNumber)
    }
    return (
        <ImageContainer onClick={handleFuncaoClick}>
            <Image src={src} alt="Imagem" />
            <NumberOverlay>{number}</NumberOverlay>
        </ImageContainer>
    );
};

export default ImageWithNumber;
