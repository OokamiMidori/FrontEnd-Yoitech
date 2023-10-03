import styled from "styled-components";

export const EmailConfirmedPage = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const EmailConfirmedCard = styled.div`
height: 60vh;
width: 35vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
h1{
    background-color: #707070;
    width: 100%;
    color: #A9AEB3;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 15%;
    font-size: x-large;
    padding-left: 20px;
    margin-top: 8vh;
    margin-bottom: 8vh;
}
div{
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 15px;
    text-align: center;
    color: #707070;
    font-size: large;
}
img{
    background-color: white;

}
`
export const ImgContainerConfirmEmailCard = styled.div`
width: 100%;
background-color: white;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
img{
    width: 3vw;
    margin-left: 90%;
    margin-top: 5vh;
    cursor: pointer;
}
`