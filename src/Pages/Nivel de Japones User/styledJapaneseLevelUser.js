import styled from "styled-components";

export const JapaneseLevelUserPageStyled = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const JapaneseLevelUserCard = styled.div`
height: 75vh;
width: 45vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
.Titulo{
    background-color: white;
    font-size: x-large;
    margin-left: 15%;
    color: #707070;
}
img{
    background-color: white;
    cursor: pointer;
    width: 2vw;
}
.inputTitulo{
    background-color: white;
}
.conversacao{
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: medium;
    align-items: center;
    background-color: white;
  
    input{
        width: 90%;
        background-color: white;
    }
}
.leitura{
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: medium;
    align-items: center;
    background-color: white;
  
    input{
        width: 45%;
        background-color: white;
    }

}
`
export const LevelCard = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: space-evenly;
background-color: white;
.nivelCard{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 20%;
    text-align: center;
    background-color: #DDDDDD;
    font-size: smaller;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0px 5px;
    cursor: pointer;
    min-height: 50px;
    min-width: 104px;
}
`

export const NextAndBackImgLinguage = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
background-color: white;
padding: 0px 1vw;
`