import styled from "styled-components";

export const ChangeUserStyledPage = styled.div`
display: flex;
flex-direction: column;
height: 1000px;
align-items: center;
justify-content: space-between;
`

export const ChangeUserCard = styled.div`
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
    width: 59px;
    margin: 0px 10px;
}
.titulo{
    font-size: x-large;
    margin-left: 2vw;
}
`

export const ChangeSelectUser = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
width: 90%;
margin-left: 10%;
height: 30vh;
select{
    width: 322px;
    height: 50px;
}
`