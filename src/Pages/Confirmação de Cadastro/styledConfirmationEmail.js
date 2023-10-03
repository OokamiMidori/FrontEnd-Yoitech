import styled from "styled-components";

export const ConfirmationPageStyled = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const ConfirmationMensageCard = styled.div`
height: 60vh;
width: 35vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
div{
    background-color: white;
}
span{
    background-color: white;
}
h2{
    background-color: white;
}
h1{
    background-color: #707070;
    width: 100%;
    color: #A9AEB3;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 15%;
    font-size: x-large;
    padding-left: 20px;
    margin-top: 20px;
}
`

export const AvisoCard = styled.div`
text-align: start;
display: flex;
align-items: center;
justify-content: center;
width:80%;
background-color: #FCFAC1 ;
div{
    background-color: #FCFAC1;
    text-align: center;
    padding: 0 20px;
}
span{
    background-color: #FCFAC1;
}
.aviso{
    font-size: large;
}
`
export const BottonCard = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
width: 100%;
`

export const AlterarEmailCard = styled.div`
width: 13vw;
background-color: #707070 ;
border: 1px #707070 solid;
border-radius: 25px;
display: flex;
align-items: center;
justify-content: center;
div{
    background-color: #EBE9E9;
    width: 100%;
    border-radius: 25px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
}
`

export const EnviarEmailCard = styled.div`
width: 13vw;
background-color: #6AAEFF;
color: white;
border: 1px #707070 solid;
border-radius: 25px;
display: flex;
align-items: center;
justify-content: center;
div{
    background-color: #6AAEFF;
    width: 100%;
    border-radius: 25px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
}
`
export const MensageTopCard = styled.div`
text-align: center;
`