import styled from "styled-components";

export const UserJobDetailsStyled = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
justify-content: space-between;
`
export const UserJobDetailsCard = styled.div`
height: 60vh;
width: 35vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
div{
    background-color: white;
}
img{
    background-color: white;
    cursor: pointer;
    width: 8%;
    margin: 0px 10px;
}
.titulo{
    font-size: large;
    margin-left: 2vw;
}
`
export const JobUserSelectCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
width: 90%;
margin-left: 10%;
.forms{
    display: flex;
    input{
        width: 20%;
        padding-left: 5px;
    }
}
`