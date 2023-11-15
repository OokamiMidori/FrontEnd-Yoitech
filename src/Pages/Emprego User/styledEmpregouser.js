import styled from "styled-components";

export const UserJobDetailsStyled = styled.div`
display: flex;
flex-direction: column;
height: 1000px;
align-items: center;
justify-content: space-between;
`
export const UserJobDetailsCard = styled.div`
height: 603px;
width: 700px;
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
    width: 59px;
    margin: 0px 10px;
    height: 59px;
}
.titulo{
    font-size: x-large;
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
    align-items: center;
    justify-content: center;
    input{
        width: 199px;
        padding-left: 5px;
        height: 50px;
    }
}
.trabalho{
    height: 50px;
    width: 294px;
}
.inicio{
    height: 50px;
    width: 294px;
}
.extra{
    height: 50px;
    width: 294px;
}
`