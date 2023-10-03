import styled from "styled-components";

export const UserAdressStyledPage = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
justify-content: space-between;
`
export const UserAdressPageCard = styled.div`
height: 60vh;
width: 35vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;

input{
    background-color: #DDDDDD;
}
div{
    background-color: white;
    
}
h2{
    background-color: white;
    font-size: x-large;
    padding-left: 5vw;
}
img{
    background-color: white;
    padding: 0px 5px;
    cursor: pointer;
}
`
export const ProvinciaCidadeCard = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: space-evenly;
background-color: white;

select{
    background-color: #DDDDDD;
    color: #A8A8A8;
}
div{
    background-color: white;
}
`
export const BairroAptoCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
width: 100%;
padding-left: 5vw;
height: 25%;
input{
    width: 98%;
}
div{
    width: 85%;
   
}
.BairroApto{
    margin: 3px;
    height: 100%;
}
`
export const CepCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
padding-left: 5vw;
`
