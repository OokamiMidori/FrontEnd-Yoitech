import styled from "styled-components";

export const UserAdressStyledPage = styled.div`
display: flex;
flex-direction: column;
height: 1000px;
align-items: center;
justify-content: space-between;
`
export const UserAdressPageCard = styled.div`
height: 596px;
width: 700px;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
margin: 155px 0px;

input{
    background-color: #DDDDDD;
}
div{
    background-color: white;
    
}
h2{
    background-color: white;
    font-size: x-large;
    padding-left: 117px;
    
}
img{
    background-color: white;
   width: 59px;
   height: 59px;
   margin-right: 18px;
   margin-left: 623px;
    cursor: pointer;
}
`
export const ProvinciaCidadeCard = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: flex-start;
justify-content: space-between;
background-color: white;
padding-right: 130px;
padding-left: 117px;
select{
    background-color: #DDDDDD;
    color: #A8A8A8;
    width: 200px;
    height: 50px;
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
padding-left: 117px;
height: 25%;
input{
    width: 440px;
    height: 50px;
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
padding-left: 117px;
input{
    height: 50px;
    width: 200px;
    padding: 10px;
}
`
