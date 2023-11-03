import styled from "styled-components";

export const CompanyLoginContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 100vh;
width: 100%;
`

export const LoginCompanyContainer = styled.div`
display: flex;
flex-direction: column;
width: auto;
height: 100%;
justify-content: center;
align-items: center;
`

export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
width: 340px;
height: 596px;
background-color: white;
margin: 10px 0px;

align-items: center;
justify-content: space-between;
padding: 20px 0px;
p{
    background-color: white;
}
h2{
    background-color: white;
    margin: 5px;
    color: #707070;
    font-size: x-large;
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
    width: 100%;
    padding: 0px 40px;
    input{
        height: 50px;
        width: 260px;
    }
}
.entrar{
    height: 50px;
    width: 260px;
    background-color: #3390ff;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: #ebe9e9;
    cursor: pointer;
    
}
.criarCadastro{
    height: 50px;
    width: 260px;
    background-color: #D9E0E6;
    color: #707070;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    cursor: pointer;
}
h3{
    background-color: white;
    margin: 5px;
    color: #707070;
    font-size: large;
}
p{
    cursor: pointer;
}
.botao{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
}
`