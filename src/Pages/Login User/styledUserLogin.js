import styled from "styled-components";

export const LoginUserContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
height: 100vh;
`
export const CardLoginUser = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: white;
width: 20vw;
height: 60vh;
margin-left: 40vw;
p{
    background-color: white;
}
h2{
    background-color: white;
    margin: 5px;
}
input{
    background-color: #D9E0E6;
    width: 13vw;
    height: 5vh;
    padding-left: 5px;
    border: none;
}
div{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
   
}
.form{
    display: flex;
    align-items: start;
    justify-content: center;
    background-color: white;
}
.entrar{
    height: 6vh;
    width: 13vw;
    background-color: #3390ff;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: #ebe9e9;
    cursor: pointer;
    
}
.criarCadastro{
    height: 6vh;
    width: 13vw;
    background-color: #D9E0E6;
    color: #707070;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    cursor: pointer;
}
`