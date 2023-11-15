import styled from "styled-components";

export const ConfirmationPageStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100vh;
`

export const ConfirmationMensageCard = styled.div`
min-height: 596px;
width: 700px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 155px 0px;

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
    color: #F9F2F2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 88px;
    font-size: xx-large;
    padding-left: 20px;
    margin-top: 20px;
}
`

export const AvisoCard = styled.div`
text-align: start;
display: flex;
align-items: center;
justify-content: center;
width:550px;
height: 88px;
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
margin-bottom: 20px;
`

export const AlterarEmailCard = styled.div`
width: 285px;
height: 78px;
background-color: #707070 ;
border: 1px #707070 solid;
border-radius: 25px;
display: flex;
align-items: center;
justify-content: center;
div{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EBE9E9;
    width: 285px;
    height: 78px;
    border-radius: 25px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
    font-size: x-large;
    padding: 0px 37px;
}
`

export const EnviarEmailCard = styled.div`
width: 285px;
height: 78px;
background-color: #6AAEFF;
color: white;
border: 1px #707070 solid;
border-radius: 25px;
display: flex;
align-items: center;
justify-content: center;
div{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6AAEFF;
    width: 285px;
    height: 78px;
    border-radius: 25px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
    font-size: x-large;
}
`
export const MensageTopCard = styled.div`
text-align: center;
width: 572px;
height: 124px;
font-size: large;
`