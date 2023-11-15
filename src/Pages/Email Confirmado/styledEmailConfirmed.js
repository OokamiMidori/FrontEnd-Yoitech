import styled from "styled-components";

export const EmailConfirmedPage = styled.div`
display: flex;
flex-direction: column;
height: 100vh;

align-items: center;
justify-content: space-between;
`

export const EmailConfirmedCard = styled.div`
height: 596px;
width: 700px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
margin: 155px 0px;
/* justify-content: center; */
h1{
    background-color: #707070;
    width: 700px;
    color: #A9AEB3;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 88px;
    font-size: xx-large;
    padding-left: 20px;
    margin-top: 8vh;
    margin-bottom: 8vh;
}
.div{
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 50px;
    text-align: center;
    color: #707070;
    font-size: x-large;
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
margin-top: 20%;
img{
    width: 59px;
    height: 59px;
    margin-left: 90%;
    /* margin-top: 5vh; */
    cursor: pointer;
}
`
