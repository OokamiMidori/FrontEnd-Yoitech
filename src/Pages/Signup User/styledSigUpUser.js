import styled from "styled-components";

export const StyledSingUpUserContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
justify-content: space-between;

`
export const SingUpUserCard = styled.div`
height: 60vh;
width: 35vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;

img{
    height: 9vh;
    width: 15vh;
    cursor: pointer;
}
div{
    background-color: white;
}
.input{
    height: 6vh;
    width: 25vw;
    border: none;
    padding-left: 5px;
    margin-bottom: 1vh;
   
}
p{
    background-color: white;
}
h3{
    background-color: white;
    
    color: #707070;
    /* margin-left: 5vw; */
    margin-bottom: 2vh;
}

span{
    background-color: white;
}

`
export const NextAndBackImg = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 35vw;
`
export const ContainerCard = styled.div`
  background-color: white;
    margin-left: 5vw;
`

export const TermosContainer = styled.p`
/* display: flex;
flex-direction: row; */
background-color: white;
margin-top: 6vh;
/* justify-content: flex-start;
align-items: flex-start; */
text-align: center;
width:100%;
.termos{
    color: #FC0C24;
}
`