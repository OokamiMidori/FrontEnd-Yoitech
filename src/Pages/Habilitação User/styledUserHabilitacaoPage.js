import styled from "styled-components";

export const UserHabilitacaoPageStyled = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const UserHabilitacaoCard = styled.div`
height: 60vh;
width: 35vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
div{
    background-color: white;
}
h1{
    background-color: white;
    font-size: larger;
    margin-left: 10%;
    color: #707070;
}
select{
    background-color: #DDDDDD;
    color: #A8A8A8;
    
}
img{
    background-color: white;
    width: 9%;
    cursor: pointer;
    margin: 0px 5px;
}
`
export const SelectCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
margin-left: 10%;
height: 73%;
select{
    width: 200px;
    height: 50px;
}
`